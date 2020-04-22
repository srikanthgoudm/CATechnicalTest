#Add multiple entities
|fullname         |country          |yob         |position      |url                                 |risk_level    |
|-----------------|-----------------|------------|--------------|------------------------------------|--------------|
|srikanth tester  |India            |31/03/1982  |MP            |http://bbc.co.uk/srikanth-tester    |Low           |
|raj tester       |UK               |31/10/1978  |MP            |http://bbc.co.uk/srikanth-tester    |Low           |

##Verify that user can add politician data with valid information
tags: smoke
* I am on the homepage
* I enter new entity with the data <fullname>, <country>, <yob>, <position>, <url>, <risk_level>
* I select save
* I should see message on pop up with <fullname>