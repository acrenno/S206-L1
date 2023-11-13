Feature: Testando API StarWars

Scenario: Testando retorno de People/1/
        Given url "https://swapi.dev/api/people/1/"
        When method get
        Then status 200

Scenario: Testando retorno de People/1/ com infos invalidas
        Given url "https://swapi.dev/api/people/1/1234"
        When method get
        Then status 404


Scenario: Testando retorno de films/2/ 
        Given url "https://swapi.dev/api/films/2/"
        When method get
        Then status 200

Scenario: Testando retorno de People/2/
        Given url "https://swapi.dev/api/people/2/"
        When method get
        Then status 200



