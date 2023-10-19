#!/usr/bin/env python
# coding: utf-8

# In[ ]:


import warnings
warnings.filterwarnings("ignore")

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestRegressor
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt
import numpy as np

df = pd.read_csv('Data_with_year.csv')

label_encoder = LabelEncoder()

df['gender'] = label_encoder.fit_transform(df['gender'])
gender_classes = list(label_encoder.classes_)

df['industry'] = label_encoder.fit_transform(df['industry'])
industry_classes = list(label_encoder.classes_)

df['state'] = label_encoder.fit_transform(df['state'])
state_classes = list(label_encoder.classes_)

X1 = df[['gender', 'industry', 'state']]
y1 = df['income']

X1_train, X1_test, y1_train, y1_test = train_test_split(X1, y1, test_size=0.2, random_state=42)

forest_model = RandomForestRegressor(n_estimators=100, random_state=42)
forest_model.fit(X1_train, y1_train)

df['predicted_income'] = forest_model.predict(X1)

X2 = df[['predicted_income', 'year']]
y2 = df['income']

linear_model = LinearRegression()
linear_model.fit(X2, y2)

while True:
    while True:
        user_gender = input("Please enter your gender (male/female): ").lower()
        if user_gender in gender_classes:
            user_gender = gender_classes.index(user_gender)
            break
        else:
            print("Invalid input. Please try again.")

    print("Please choose your industry from the list below:")
    for i, industry in enumerate(industry_classes):
        print(f"{i}. {industry}")

    while True:
        user_industry = input("Enter the number corresponding to your industry: ")
        if user_industry.isdigit() and 0 <= int(user_industry) < len(industry_classes):
            user_industry = industry_classes.index(industry_classes[int(user_industry)])
            break
        else:
            print("Invalid input. Please try again.")

    while True:
        user_state = input("Please enter your state (NSW, VIC, QLD, SA, WA, TAS, NT, ACT): ").upper()
        if user_state in state_classes:
            user_state = state_classes.index(user_state)
            break
        else:
            print("Invalid input. Please try again.")

    while True:
        user_year = input("Please enter the year (2020 or later): ")
        if user_year.isdigit() and int(user_year) >= 2020:
            user_year = int(user_year)
            break
        else:
            print("Invalid input. Please try again.")

    base_income = forest_model.predict([[user_gender, user_industry, user_state]])[0]
    final_income = linear_model.predict([[base_income, user_year]])[0]
    print(f"Your predicted income for the year {user_year} is: {final_income}")

    if user_year in df['year'].values:
        average_income_selected_year = df[df['year'] == user_year]['income'].mean()
    else:
        average_base_income = df['predicted_income'].mean()
        average_income_selected_year = linear_model.predict([[average_base_income, user_year]])[0]

    if abs(final_income - average_income_selected_year) < (0.1 * average_income_selected_year):
        print("Congratulations, your future income is roughly in line with the average. If you're looking to earn more, consider moving to another state or choosing a different industry.")
    elif final_income < (0.9 * average_income_selected_year):
        print("Unfortunately, your predicted income is significantly below the average. This is only a prediction and not indicative of your actual income. If you want to increase your earnings, you could consider relocating or switching industries. Best of luck!")
    else:
        print("Congratulations, your predicted income is well above the average! Great job!")

    industry_incomes = []
    for i in range(len(industry_classes)):
        industry_base_income = forest_model.predict([[user_gender, i, user_state]])[0]
        industry_final_income = linear_model.predict([[industry_base_income, user_year]])[0]
        industry_incomes.append(industry_final_income)


    sorted_indices = np.argsort(industry_incomes)[::-1] 
    sorted_industry_classes = [industry_classes[i] for i in sorted_indices]
    sorted_industry_incomes = [industry_incomes[i] for i in sorted_indices]

    plt.figure(figsize=(10, 6))
    y_pos = np.arange(len(sorted_industry_classes))
    plt.barh(y_pos, sorted_industry_incomes, align='center')
    plt.yticks(y_pos, sorted_industry_classes)
    plt.xlabel('Predicted Income')
    plt.title(f'Predicted Income Across Industries for the Year {user_year}')


    user_industry_sorted_position = sorted_indices.tolist().index(user_industry)
    plt.barh(user_industry_sorted_position, final_income, align='center', color='r')
    plt.annotate(f"Your income: {final_income:.2f}", xy=(final_income, user_industry_sorted_position), xytext=(final_income + 5, user_industry_sorted_position),
                 arrowprops=dict(facecolor='black', shrink=0.05))

    plt.show()

    better_than_count = sum(i < final_income for i in industry_incomes)
    total_industries = len(industry_incomes)
    print(f"Your predicted income is higher than {better_than_count} out of {total_industries} industries.")
    print("""Dear Future Leaders,

    First of all, kudos to you for actively planning your future; it's the first step towards making your dreams a reality! We want to share some insights to help guide your decision on choosing a college major or future industry.

    Data-Driven Insights: Our predictive model is designed using extensive data gathered over several years, coupled with specialized algorithms and models to ensure high accuracy. Unless unforeseen events or policy changes occur, the predictive trends should generally hold true.

    Economic Fluctuations: Keep in mind that these are predictions and not certainties. Economic conditions and inflation rates can affect these figures. So, while the numbers can give you a broad idea, they aren't the be-all and end-all.

    Your Talent Matters: Remember that income is not entirely industry-dependent. There are high earners in every field. Your skills, dedication, and ability to innovate will play a huge role in your earning potential.

    Follow Your Passion: Loving what you do is critical for long-term career satisfaction. Even in lower-paying industries, if you excel and are truly passionate about what you do, the money will follow.

    Unleash Your Potential: The sky is not the limit; it's just the beginning. You have an ocean of opportunities ahead. Dive deep into your passions, climb every obstacle, and swim against the tides if you must. Your destiny is shaped by your decisions and your hard work, not by a chart or graph.

    No dream is too big, and no dreamer too small. Believe in yourself and your ability to change the world, because we certainly do!

    Let's soar into the future, shall we? The universe is waiting for you to make your mark!
    """)

    
    
    

    user_choice = input("Would you like to make another prediction? (yes/no): ")
    if user_choice.lower() != 'yes':
        break


# In[ ]:





# In[ ]:




