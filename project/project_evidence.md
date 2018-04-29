# Project Unit Evidence

### Create a user sitemap
  ![](../screenshots/user_site_map.png)

### Produce two wireframe designs

![](../screenshots/android_wireframe.png)

![](../screenshots/wireframe_travelingo.jpg)


### Give an example of pseudocode for a function

```
function Sell_Cinema_Ticket_To_Customer

  if the customer can afford the ticket
    and if there are available seats in the cinema

      create a new ticket for the customer
      debit the customer's wallet with the ticket price
      credit the cinema till with the ticket price
      reduce the number of available seats in the cinema

```



### Show user input being processed according to design requirements.
Take a screenshot of:
- The user inputting something into your program

  ![](../screenshots/input_process_sainsburys_vendor.png)
- The user input being saved or used in some way

  ![](../screenshots/user_input_new_transaction.png)


### Show an interaction with data persistence.
Take a screenshot of:
- Data being input into your program

  ![](../screenshots/user_input_new_transaction.png)
- Confirmation of the data being saved

  ![](../screenshots/input_saved.png)


### Show the correct output of results and feedback to user.
Take a screenshot of:
- The user requesting information or an action to be performed
- The user request being processed correctly and demonstrated in the program

  ![](../screenshots/search_for_cash_output.png)



### Take a screenshot of one of your projects where you have worked alone and attach the Github link.
- [I Need A Budget](https://github.com/docljn/i_need_a_budget_in_ruby_sinatra)
  ![](../screenshots/solo_project_github.png)

### Take screenshots or photos of your planning and the different stages of development to show changes.
- Trello
  ![](../screenshots/Trello_INAB.png)
- ProtoPersona  
  ![](../screenshots/planning_proto_persona_nicole.png)
- User Journey
  ![](../screenshots/user_journey.png)
- Initial Commit
  ![](../screenshots/initial_commit.png)
- Final Commit  
  ![](../screenshots/final_commit.png)
- Final Readme
  [Readme.md](https://github.com/docljn/i_need_a_budget_in_ruby_sinatra/blob/master/readme.md)


### Demonstrate testing in your program.

- Test code

  ``` ruby
  require("minitest/autorun")
  require ("minitest/reporters")
  Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new

  require_relative("../models/display.rb")

  class TestCategory < MiniTest::Test

    def test_display_amount_gives_currency_string__10
      assert_equal('10.00', Display.amount(10))
    end

    def test_display_amount_gives_currency_string__1
      assert_equal('1.00', Display.amount(1))
    end

    def test_display_amount_gives_currency_string__10_10
      assert_equal('10.10', Display.amount(10.10))
    end

    def test_display_amount_gives_currency_string__237_05
      assert_equal('237.05', Display.amount(237.05))
    end

    def test_display_amount_returns_negative_numbers__10
      assert_equal('-10.00', Display.amount(-10))
    end

    def test_display_amount_returns_negative_numbers__237_05
      assert_equal('-237.05', Display.amount(-237.05))
    end

  end
  ```

- Code under test

  ```ruby
  class Display

    def self.amount(amount)
      money_array = amount.to_s.split(".")
      pounds = money_array[0]
      pence = money_array[1]
      if pence == nil
        pence = "00"
      end
      return "#{pounds}.#{pence}"
    end
  end
  ```

- Failing test

  ![](../screenshots/failing_test.png)

- Corrected code under test

  ```ruby
  class Display

    def self.amount(amount)
      money_array = amount.to_s.split(".")
      pounds = money_array[0]
      pence = money_array[1]
      if pence == nil
        pence = "00"
      end
      if pence.length < 2
        pence = pence + "0"
      end
      if pence.length > 2
        pence = pence.round
      end
      return "#{pounds}.#{pence}"
    end
  end
  ```

- Passing test

  ![](../screenshots/passing_test.png)



### Show an API being used within your program.
Take a screenshot of:

- The code that uses or implements the API
  ![](../screenshots/group_translate_api.png)

- The API being used by the program whilst running
  ![](../screenshots/group_api_output.png)


### Group Project
[Project Readme](https://github.com/docljn/codeclan_group_project/blob/master/README.md)

#### Take a screenshot of the contributor’s page on Github from your group project to show the team you worked with.
  ![](../screenshots/github_group_contrib.png)

#### Take a screenshot of the project brief from your group project.
  ![](../screenshots/group_project_brief.png)

#### Provide a screenshot of the planning you completed during your group project, e.g. Trello MOSCOW board.
  ![](../screenshots/group_proto_personas.png)
  ![](../screenshots/group_user_needs.png)
  ![](../screenshots/group_trello.png)


### Write an acceptance criteria and test plan.
Acceptance Criterion | Expected Result / Output | Pass/Fail
---------------------|--------------------|------
A user can see all countries and their respective languages | On app start, a drop-down list of countries and associated languages is displayed | PASS
A user can select a country | Country name, local weather (if available), flag, and common phrases translated into the language of the selected country are displayed | PASS
A user can save a custom translated phrase | When a user reselects a language where they have previously saved a phrase, that translation is displayed along with the standard list of phrases | PASS
A user can hear a translated phrase spoken by a native speaker | When a user clicks on "Speak" the phrase is spoken if the language is available in the speech-to-text api | PASS



### Produce two system interaction diagrams (sequence and/or collaboration diagrams)

  ![](../screenshots/hotel_update_collaboration.png)

  ![](../screenshots/vending_machine_collaboration.png)


### Produce two object diagrams

  ![](../screenshots/fantasy_object_diagram.png)

  ![](../screenshots/object_diagram.png)


### Select two algorithms you have written (NOT the group project).
Take a screenshot of each and write a short statement on why you have chosen to use those algorithms.
- algorithm: method that does something with data (sorting, fetching, storing)
  ![](../screenshots/router_function.png)
  - This algorithm links the front-end of the application to the back-end (client side to server side) by responding to an HTML get request with a JSON object which is generated from the ENUM constants representing the item-types which are stocked in the vending machine being modelled. The JSON object is structured to include the full details of the ENUM, rather than just the names, to allow for the correct representation of the information in the reactjs front end.

  ![](../screenshots/status_function.png)
  - This algorithm is a way to aggregate all the data required to model the current status of the vending machine.  A JSON object is constructed using various separate methods to interrogate the current status of the modelled machine, and this is used to pass the data to the primary react component.

### Produce a bug tracking report
Description | Pass/Fail | Fix | Pass/Fail
------------|:-----------:|-----|:----------:|
When an item is purchased and change is returned the change amount is displayed in cents rather than dollars | FAIL | Apply DisplayFormat.dollars() method to the change amount before returning the information to the client side | PASS
The initial render of the app is taking longer than the agreed 1 second | FAIL | Resize all image files to 50mm width so that the rendering does not rely on resizing images | PASS
