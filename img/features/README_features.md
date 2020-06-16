# README
Description of features for Lee

*_Note_* Calculating mean/std for features like loyalty or regularity doesn't make sense, based on these features' definition. 
You'd have to calculate average across days, but this would be biased since users don't all use apps at the same rate. Further, metrics like regularity are already calculated on a daily timescale, making these metrics difficult to calculate. More details in feature descriptions below.


## Identifying Features

- `pid`
The participant ID

- `weekofstudy`
The week of the study, measured from the enrollment date. So, this includes week 1 (the mini study, as Phil described it)

## Engagement Features

- `loyalty`
The total number of times the user opened any app that week; defined in Cheung et al. 2018 (Paper provided in directory)

- `loyalty_<appname>`
The total number of times the user opened the given app `<appname>` that week

- `regularity`	
The total number of days a user opened any app that week; defined in Cheung et al. 2018 (Paper provided in directory)

- `regularity_<appname>`	
The total number of days a user opened the given app `<appname>` that week

- `duration`	
The total amount of time (in minutes) a user spent using apps that week

- `duration_<appname>`
The total amount of time (in minutes) a user spent using the given app `<appname>` that week

- `duration_mean`
Mean duration across all apps for that week

- `duration_mean_<appname>`
Mean duration for the given app `<appname>` for that week

- `duration_std` 
Std of duration across all apps for that week

- `duration_std_<appname>`
Std of duration for the given app `<appname>` for that week

## Codebook Features (Categorical, Mapped to Numeric!)
Corresponding codebook questions have been copied below

`cope_alchohol_tob`	
How much have you used alcohol or tobacco to cope with negative feelings? (Q3_1)

`physical_pain`	
How much physical pain have you experienced? (Q3_2)

`connected`	
How connected did you feel to family and friends? (Q3_3)

`receive_support`	
How much support did you receive from loved ones? (Q3_4)

`anx_mood`	
How much did you feel nervous, anxious, or on edge? (Q3_5)

`dep_mood`
How much did you feel down or hopeless? (Q3_6)

`active`	
How active were you? (Q3_7)

`support_others`	
How much were you able to support loved ones? (Q3_8)

`healthy_food`	
How much healthy food did you eat? (Q3_9)

`manage_neg`
How well have you managed negative feelings? (Q3_10)











