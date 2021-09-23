Feature: AvantStay

        Background: As user I would like to login and booking
                                    
        @testzero Login
        Scenario: To see options to login
            Given I as a user wanna access the site
              And I wanna fill in the fields "lui.al@me.com" "123456"
             When I click the bottom to accept the terms and I click the bottom
             Then I must to see the main page

        @testone Login
        Scenario: To see options to login
            Given I as a user wanna access the site
              And I wanna fill in the fields "lui.al@mentonit.net" "123456"
             When I click the bottom to accept the terms and I click the bottom
             Then I must to see the main page

        @testtwo Login
        Scenario: To see options to login
            Given I as a user wanna access the site
              And I wanna fill in the fields "lui.al@vintomaper.com" "123456"
             When I click the bottom to accept the terms and I click the bottom
             Then I must to see the main page

        @testthree Search
        Scenario: To search elements
            Given I as a user wanna search some houses
             When I write two letters
             Then I see the result

        @testfour Booking
        Scenario: To book some house
            Given I as a user wanna booking some house
             When I select one house
             Then I must to get a booking