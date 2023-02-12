# Investigation-of-Nutritional-Content-in-Popular-Cereals

## Overview of Project
The purpose of the project is to build a database to answer consumer queries about breakfast food nutrition and information, use the nutritional data to answer cosumer questions, for example, consumers with special dietary restrictions like allergies or diabetes, or nutritional preferences like low sugar, low fat or low carb diets. 
We also analyzed which manutactures put the most sugar in their cereals, and to predict a cereal's health score based on nutritional content, for example, do high-sugar cereals predict a lower health score? For future deployment, we could develop a predictive model to predict how nutrient content coorespond to a health score of cereal options.



## Datasets

Primary dataset: Kaggle dataset on 80 cereals' nutritional content - Contains cereal names, nutrient information, manufacturer, and health score for 80 popular breakfast cereals (cold and hot).

Nutrition Info: USDA Dataset's Global Branded Foods dataset. - Detailed ingredient information and verified nutrient info.


Allergy Info: Kaggle dataset on food allergens - List of food allergens and the allergies they correspond to



## Data Cleaning

UPCs were manually added to each Kaggle cereal based on product description.

Primary dataset entries cleaned up - Any cereal not present in the USDA database was removed.

USDA dataset cleaned up - Ingredients were split from space-separated into list of ingredients.

Allergy dataset cleaned up - Allergy-causing ingredients formatted to match USDA ingredient format (all-uppercase)

Intermediate data conversion - All data was converted into JSON format to prepare for programmatic insertion into our RDBMS


## ER Diagram
![Picture1](https://user-images.githubusercontent.com/38533045/218321476-e29a3754-a91b-4aa9-8243-602bb37a6d1d.png)



##  Example Queries
[SQL Queries](https://github.com/lindaxie7/Investigation-of-Nutritional-Content-in-Popular-Cereals/blob/main/queries.sql)




## Data Analysis

* Linear regression on rating ;  Logistic regression on manufacturer; Text Analysis on Ingredients
[R Code](https://github.com/lindaxie7/Investigation-of-Nutritional-Content-in-Popular-Cereals/blob/main/Cereal%20Data%20Analysis.Rmd)

![Screenshot 2023-02-12 100844](https://user-images.githubusercontent.com/38533045/218322741-9503d0a6-ebeb-4a50-be2b-6481332e906e.png)

![Screenshot 2023-02-12 100906](https://user-images.githubusercontent.com/38533045/218322742-08011385-1901-4bc0-b6a8-a24e89b608f6.png)
  
* Random Forests for Feature importance
[Python Code](https://github.com/lindaxie7/Investigation-of-Nutritional-Content-in-Popular-Cereals/blob/main/random_forest.ipynb)


![Screenshot 2023-02-12 100940](https://user-images.githubusercontent.com/38533045/218322743-1f2b075d-bbc9-48f1-af6c-ec0d6eeb1842.png)




