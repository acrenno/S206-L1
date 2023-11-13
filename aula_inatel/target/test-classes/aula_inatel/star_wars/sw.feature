Feature: Testando API StarWars

Scenario: Testando retorto de People/1/
        Given url "https://swapi.dev/api/people/1/"
        When method get
        Then status 200
