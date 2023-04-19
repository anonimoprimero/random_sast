import time 
import os 
import gc
import itertools
import numpy as np

import sys
sys.path.append(os.path.abspath('.'))

from sast.utils_sast import *
from sast.sast import *
from sklearn.linear_model import RidgeClassifierCV
from sklearn.ensemble import RandomForestClassifier

dataset_folder = '/home/local.isima.fr/mimbouop/Univariate_arff' # the folder containing the datasets

columns = ('classifier','dataset', 'acc_mean', 'acc_std', 'train_time_in_sec_mean', 'train_time_in_sec_std', 'test_time_in_sec_mean', 'test_time_in_sec_std') # columns of the output file

nb_run_per_dataset = 5 # number of run for each dataset

dataset_names_file = "dataset_names.txt" # file containing the names of the datasets to run experiments on

nb_inst_per_class = 1 # the number of instances to use per class in order to generate shapelet candidate

min_shp_length = 3 # min candidate length

datasets = np.loadtxt(dataset_names_file, dtype=str) # every dataset names

to_skip = [] 

output_file = 'results/results-rf-ridge.csv' # the name of the result file

print('Running on', len(datasets), ' datasets')
print('Number of run per dataset:', nb_run_per_dataset)

mode = 'w+'
if os.path.isfile(output_file):
	mode = 'a+'
	to_skip = np.loadtxt(output_file, usecols=(0,1), dtype=str, delimiter=',', skiprows=1)
	to_skip = [''.join(elt) for elt in to_skip]

with open(output_file, mode, buffering=1) as f:

	if mode == 'w+':
		f.write(','.join(columns) + '\n')


	for i, dataset in enumerate(datasets):
		try:
			train_ds, test_ds = load_dataset(dataset_folder, dataset)
			
			# fill na
			train_ds.fillna(0, axis=1, inplace=True)
			test_ds.fillna(0, axis=1, inplace=True)
			
			X_train, y_train = format_dataset(train_ds, shuffle=True)
			X_test, y_test = format_dataset(test_ds)

			max_shp_length = X_train.shape[1]

			# free some memory
			del train_ds
			del test_ds
			gc.collect()

			if 'SAST-Ridge' + dataset not in to_skip:

				print('Executing:', dataset, 'with SAST-Rdige')

				accuracy_ridge = []
				train_time_ridge = []
				test_time_ridge = []

				for _ in range(nb_run_per_dataset):

					## using ridge
					clf = RidgeClassifierCV(alphas=np.logspace(-3, 3, 10))
					sast_ridge = SAST(cand_length_list=np.arange(min_shp_length, max_shp_length+1),
			                         nb_inst_per_class=nb_inst_per_class, 
			                         random_state=None, classifier=clf)

					train_start = time.time()

					sast_ridge.fit(X_train, y_train)

					train_time_ridge.append(time.time() - train_start)

					test_start = time.time()
						
					acc = sast_ridge.score(X_test, y_test)

					test_time_ridge.append(time.time() - test_start)

					accuracy_ridge.append(acc)

				result = ['SAST-Ridge', dataset, np.mean(accuracy_ridge), np.std(accuracy_ridge), np.mean(train_time_ridge), np.std(train_time_ridge), np.mean(test_time_ridge), np.std(test_time_ridge)]
				f.write(','.join(np.array(result, dtype=np.str)) + '\n')

			if 'SAST-RF' + dataset not in to_skip:
				
				print('Executing:', dataset, 'with SAST-RF')

				accuracy_rf = []
				train_time_rf = []
				test_time_rf = []

				for _ in range(nb_run_per_dataset):

					## using RF
					clf = RandomForestClassifier(max_features=None, min_impurity_decrease=0.05)
					sast_rf = SAST(cand_length_list=np.arange(min_shp_length, max_shp_length+1),
			                         nb_inst_per_class=nb_inst_per_class, 
			                         random_state=None, classifier=clf)

					train_start = time.time()

					sast_rf.fit(X_train, y_train)

					train_time_rf.append(time.time() - train_start)

					test_start = time.time()
						
					acc = sast_rf.score(X_test, y_test)

					test_time_rf.append(time.time() - test_start)

					accuracy_rf.append(acc)

				result = ['SAST-RF', dataset, np.mean(accuracy_rf), np.std(accuracy_rf), np.mean(train_time_rf), np.std(train_time_rf), np.mean(test_time_rf), np.std(test_time_rf)]
				f.write(','.join(np.array(result, dtype=np.str)) + '\n')

		except Exception as e:
			raise e
			print('\n###########\nFailed on dataset:', dataset, ' Msg:', e, '\n##################\n')

print('All done')
