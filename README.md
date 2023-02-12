# Investigation-of-Nutritional-Content-in-Popular-Cereals

## Overview of Project
The purpose of the project is to build a database to answer customer queries about breakfast food nutrition and information, use the nutritional data to answer cosumer questions, for example, consumers with special dietary restrictions like allergies or diabetes, or nutritional preferences like low sugar, low fat or low carb diets. 
We also analyzed which manutactures put the most sugar in their cereals, and to predict a cereal's health score based on nutritional content, for example, do high0-sugar cereals predict a lower health score? For future deployment, we could develop a predictive model to predict how nutrient content coorespond to a health score of cereal options.



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



##  Example Queries





## Data Analysis
* Regression

Linear on rating
Logistic on manufacturer

* Text Analysis

  Ingredients
  
* Random Forests

Feature importance







