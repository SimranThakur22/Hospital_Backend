 the major libraries/frameworks used:

Express Framework:

Reason for Use: Express.js is a fast, unopinionated, and minimalist web framework for Node.js, making it an ideal choice for building web applications and APIs. Its simplicity, flexibility, and large ecosystem of middleware make it a popular choice among developers.


Express-Validator:
Reason for Use: Express-validator is a middleware for Express.js that provides easy-to-use methods for validating and sanitizing request data. When dealing with user inputs like email and phone numbers, it helps ensure that the data conforms to the expected format and rules, reducing the risk of security vulnerabilities and data inconsistencies.

MySQL Database:

Reason for Use: MySQL is a widely-used open-source relational database management system. It's chosen for its reliability, performance, and scalability. When building web applications that require persistent data storage, MySQL provides a robust and efficient solution. Storing user data, including email and phone numbers, in a MySQL database allows for easy retrieval, manipulation, and querying of data.


DB Schema for storing patient details in patient table and hospital data in mysql db:


create table patient (
patient_id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(60) NOT NULL,
address VARCHAR(60) NOT NULL CHECK(LENGTH(address)>9),
phone_number VARCHAR(14) NOT NULL,
password VARCHAR(15) NOT NULL CHECK (LENGTH(password)>7),
photo_url VARCHAR(60) NOT NULL,
hospital_id INT NOT NULL ,
)

create table hospital_data(
id INT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
psychiatrist_details JSON NOT NULL
)

INSERT STATEMENTS for the patient table AND hospital_data table

set @psychiatrist_details_hospital1='[
    {
        "id": 1,
        "name": "DR. KRISHANA PURTY"
    },
    {
        "id": 2,
        "name": "DR. ALEX JOHNSON"

    },
    {
        "id": 3,
        "name": "DR. MARIA GARCIA"

    },
    {
        "id": 4,
        "name": "DR. LI WEI"
      
    },
    {
        "id": 5,
        "name": "DR. JOHN SMITH"

    }
]'
set @psychiatrist_details_hospital2='[
 {
        "id": 6,
        "name": "DR. EMILY BROWN"
   
    },
    {
        "id": 7,
        "name": "DR. DAVID CLARK"
          
    },
    {
        "id": 8,
        "name": "DR. OLIVIA MARTINEZ"
 
    },
    {
        "id": 9,
        "name": "DR. MICHAEL LEWIS"
      
    },
    {
        "id": 10,
        "name": "DR. JESSICA WILSON"
    
    }
]'
set @psychiatrist_details_hospital3='[
 {
        "id": 11,
        "name": "DR. DANIEL WALKER"
         
    },
    {
        "id": 12,
        "name": "DR. ASHLEY HALL"
     
    },
    {
        "id": 13,
        "name": "DR. JAMES ALLEN"

    },
    {
        "id": 14,
        "name": "DR. ELIZABETH YOUNG"
     
    },
    {
        "id": 15,
        "name": "DR. MATTHEW HERNANDEZ"

    }
]'

SET @psychiatrist_details_hospital4 = '[
    {
        "id": 16,
        "name": "DR. AMANDA KING"
  
    },
    {
        "id": 17,
        "name": "DR. JOSHUA WRIGHT"
   
    },
    {
        "id": 18,
        "name": "DR. SARAH LOPEZ"
 
    },
    {
        "id": 19,
        "name": "DR. ANDREW HILL"
        
    },
    {
        "id": 20,
        "name": "DR. KAREN SCOTT"

    },
    {
        "id": 21,
        "name": "DR. ROBERT GREEN"
     
    }
]';

INSERT INTO hospital_data
 (id,name,psychiatrist_details)
 VALUES
 (1,"Apollo Hospitals",@psychiatrist_details_hospital1),
 (2,"Jawaharlal Nehru Medical College and Hospital",@psychiatrist_details_hospital2),
 (3,"Indira Gandhi Institute of Medical Sciences (IGIMS)",@psychiatrist_details_hospital3),
 (4,"AIIMS - All India Institute Of Medical Science",@psychiatrist_details_hospital4);
 
 

INSERT INTO patient (name, address, email, phone_number, password, photo_url, hospital_id)
VALUES
('Jacob Wright', '8899 Aspen Drive, District', 'jacob.wright@example.com', '+91 1234567823', 'JacgobWri0', 'jacob_wright.jpg', 1),
('Sofia Cook', '9900 Oak Avenue, Village', 'sofia.cook@example.com', '+91 1234567824', 'SofiagCoo1', 'sofia_cook.jpg', 2),
('Sebastian Rogers', '2233 Aspen Street, Town', 'sebastian.rogers@example.com', '+91 1234567825', 'Sebastgi2', 'sebastian_rogers.jpg', 3),
('Camila Collins', '3344 Redwood Drive, Zone', 'camila.collins@example.com', '+91 1234567826', 'CamgilaCo3', 'camila_collins.jpg', 4),
('Daniel Edwards', '4455 Sycamore Parkway, Locale', 'daniel.edwards@example.com', '+91 1234567827', 'DanigelEd4', 'daniel_edwards.jpg', 1),
('Evelyn Hill', '5566 Cedar Avenue, Territory', 'evelyn.hill@example.com', '+91 1234567828', 'EvelygnHi5', 'evelyn_hill.jpg', 2),
('Gabriel Coleman', '6677 Walnut Street, Province', 'gabriel.coleman@example.com', '+91 1234567829', 'GabrielgC6', 'gabriel_coleman.jpg', 3),
('Hannah Mitchell', '7788 Chestnut Lane, Region', 'hannah.mitchell@example.com', '+91 1234567830', 'HanngahMi7', 'hannah_mitchell.jpg', 4),
('Isaac Griffin', '8899 Aspen Drive, Borough', 'isaac.griffin@example.com', '+91 1234567831', 'IsaacGri8', 'isaac_griffin.jpg', 1),
('Jack Barnes', '9900 Oak Avenue, Hamlet', 'jack.barnes@example.com', '+91 1234567832', 'Jack1Barng9', 'jack_barnes.jpg', 2),
('Lillian Fisher', '2233 Aspen Street, City', 'lillian.fisher@example.com', '+91 1234567833', 'LilliganF0', 'lillian_fisher.jpg', 3),
('Oliver Ross', '3344 Redwood Drive, District', 'oliver.ross@example.com', '+91 1234567834', 'OlivgerRo1', 'oliver_ross.jpg', 4),
('Natalie Griffin', '4455 Sycamore Parkway, Village', 'natalie.griffin@example.com', '+91 1234567835', 'NgatalieG2', 'natalie_griffin.jpg', 1),
('Owen Cooper', '5566 Cedar Avenue, Town', 'owen.cooper@example.com', '+91 1234567836', 'OwenCgoop3', 'owen_cooper.jpg', 2),
('Peyton Butler', '6677 Walnut Street, Zone', 'peyton.butler@example.com', '+91 1234567837', 'PeytonggBu4', 'peyton_butler.jpg', 3),
('Quinn Peterson', '7788 Chestnut Lane, Locale', 'quinn.peterson@example.com', '+91 1234567838', 'QuinnPgget5', 'quinn_peterson.jpg', 4),
('Ruby Kelly', '8899 Aspen Drive, Province', 'ruby.kelly@example.com', '+91 1234567839', 'RubygKell6', 'ruby_kelly.jpg', 1),
('Samuel Richardson', '9900 Oak Avenue, Region', 'samuel.richardson@example.com', '+91 1234567840', 'SgamuelRi7f', 'samuel_richardson.jpg', 2),
('Taylor Hayes', '2233 Aspen Street, Hamlet', 'taylor.hayes@example.com', '+91 1234567841', 'TaylfforHa8', 'taylor_hayes.jpg', 3),
('Violet Bell', '3344 Redwood Drive, City', 'violet.bell@example.com', '+91 1234567842', 'ViofletBe9', 'violet_bell.jpg', 4),
('Wyatt Coleman', '4455 Sycamore Parkway, District', 'wyatt.coleman@example.com', '+91 1234567843', 'WyatdtCole', 'wyatt_coleman.jpg', 1),
('Zoe Richardson', '5566 Cedar Avenue, Village', 'zoe.richardson@example.com', '+91 1234567844', 'ZoeddRicha1', 'zoe_richardson.jpg', 2),
('Ethan Nguyen', '6677 Walnut Street, Town', 'ethan.nguyen@example.com', '+91 1234567845', 'EthanddNguy2', 'ethan_nguyen.jpg', 3),
('Layla Patel', '7788 Chestnut Lane, Zone', 'layla.patel@example.com', '+91 1234567846', 'LayladdPate3', 'layla_patel.jpg', 4),
('Zachary Cox', '8899 Aspen Drive, Locale', 'zachary.cox@example.com', '+91 1234567847', 'ZachddaryCo4', 'zachary_cox.jpg', 1),
('Madelyn Rivera', '9900 Oak Avenue, Province', 'madelyn.rivera@example.com', '+91 1234567848', 'MadettlynR5', 'madelyn_rivera.jpg', 2),
('Adrian Ward', '2233 Aspen Street, Region', 'adrian.ward@example.com', '+91 1234567849', 'AdritanWar6', 'adrian_ward.jpg', 3),
('Arianna Foster', '3344 Redwood Drive, Hamlet', 'arianna.foster@example.com', '+91 1234567850', 'AriannaFo7', 'arianna_foster.jpg', 4),
('Jaxon Washington', '4455 Sycamore Parkway, City', 'jaxon.washington@example.com', '+91 1234567851', 'JaxonWash8', 'jaxon_washington.jpg', 1),
('Skylar Sanders', '5566 Cedar Avenue, District', 'skylar.sanders@example.com', '+91 1234567852', 'SkylarSan9', 'skylar_sanders.jpg', 2),
('Kennedy Bryant', '6677 Walnut Street, Village', 'kennedy.bryant@example.com', '+91 1234567853', 'KennedyB1', 'kennedy_bryant.jpg', 3),
('John Doe', '1234 Elm Street, City', 'john.doe@example.com', '+91 1234567890', 'Passwt0rd', 'john_doe.jpg', 1),
('Jane Smith', '5678 Oak Avenue, Town', 'jane.smith@example.com', '+91 1234567891', 'SecurteP1', 'jane_smith.jpg', 2),
('Alice Brown', '9101 Maple Drive, Village', 'alice.brown@example.com', '+91 1234567892', 'Alicett123', 'alice_brown.jpg', 3),
('Bob Johnson', '1122 Pine Road, Metropolis', 'bob.johnson@example.com', '+91 1234567893', 'BobttSecur', 'bob_johnson.jpg', 4),
('Carol White', '3344 Cedar Lane, Hamlet', 'carol.white@example.com', '+91 1234567894', 'Cartt0lPwd', 'carol_white.jpg', 1),
('David Green', '5566 Birch Boulevard, Borough', 'david.green@example.com', '+91 1234567895', 'D@vttid123', 'david_green.jpg', 2),
('Eve Black', '7788 Walnut Street, District', 'eve.black@example.com', '+91 1234567896', 'EveSetcure', 'eve_black.jpg', 3),
('Frank Wilson', '9900 Chestnut Court, Province', 'frank.wilson@example.com', '+91 1234567897', 'Fr@nkt123', 'frank_wilson.jpg', 4),
('Grace Lee', '1112 Aspen Parkway, Region', 'grace.lee@example.com', '+91 1234567898', 'GratceL12', 'grace_lee.jpg', 1),
('Henry King', '2234 Redwood Drive, Municipality', 'henry.king@example.com', '+91 1234567899', 'HenrtyK1!', 'henry_king.jpg', 2),
('Ian Thomas', '3345 Sycamore Street, Area', 'ian.thomas@example.com', '+91 1234567800', 'IantTh0ma', 'ian_thomas.jpg', 3),
('Liam Miller', '5567 Ash Street, Locale', 'liam.miller@example.com', '+91 1234567802', 'LitamM1ll', 'liam_miller.jpg', 1),
('Olivia Wilson', '6789 Elm Road, Township', 'olivia.wilson@example.com', '+91 1234567803', 'Oliv1taW!', 'olivia_wilson.jpg', 2),
('Noah Davis', '7890 Oak Circle, Suburb', 'noah.davis@example.com', '+91 1234567804', 'NoahtD4v', 'noah_davis.jpg', 3),
('Emma Johnson', '8901 Pine Street, Quarter', 'emma.johnson@example.com', '+91 1234567805', 'EmmatJ0hn', 'emma_johnson.jpg', 4),
('Ava Brown', '9012 Birch Avenue, County', 'ava.brown@example.com', '+91 1234567806', 'AvaBtr0wn', 'ava_brown.jpg', 1),
('Sophia Martinez', '1233 Maple Lane, Shire', 'sophia.martinez@example.com', '+91 1234567807', 'Sopht1aM!', 'sophia_martinez.jpg', 2),
('Mason Garcia', '2344 Cedar Drive, Territory', 'mason.garcia@example.com', '+91 1234567808', 'MasotnG12', 'mason_garcia.jpg', 3),
('Isabella Taylor', '3455 Walnut Road, Province', 'isabella.taylor@example.com', '+91 1234567809', 'Isabt3lla', 'isabella_taylor.jpg', 4),
('Lucas Anderson', '4566 Chestnut Court, Hamlet', 'lucas.anderson@example.com', '+91 1234567810', 'LuttcasA1!', 'lucas_anderson.jpg', 1),
('Mia Thomas', '5677 Aspen Street, Region', 'mia.thomas@example.com', '+91 1234567811', 'MiaThtt0ma', 'mia_thomas.jpg', 2),
('Benjamin Lee', '6788 Redwood Boulevard, Municipality', 'benjamin.lee@example.com', '+91 1234567812', 'Bettnj4min', 'benjamin_lee.jpg', 3),
('Harper White', '7899 Sycamore Parkway, Metropolis', 'harper.white@example.com', '+91 1234567813', 'Harttp3rW!', 'harper_white.jpg', 4),
('Ethan Harris', '8900 Spruce Avenue, Town', 'ethan.harris@example.com', '+91 1234567814', 'Eth@ttnH!1', 'ethan_harris.jpg', 1),
('Amelia Clark', '9011 Elm Street, City', 'amelia.clark@example.com', '+91 1234567815', 'Ametl1aC2', 'amelia_clark.jpg', 2),
('James Robinson', '1122 Oak Road, Village', 'james.robinson@example.com', '+91 1234567816', 'Jame5R!t3', 'james_robinson.jpg', 3),
('Charlotte Lewis', '2233 Pine Drive, Borough', 'charlotte.lewis@example.com', '+91 1234567817', 'Charttl0tt4', 'charlotte_lewis.jpg', 4),
('Michael Walker', '3344 Birch Boulevard, Township', 'michael.walker@example.com', '+91 1234567818', 'M1ctthaelW5', 'michael_walker.jpg', 1),
('Ella Hall', '4455 Maple Court, Region', 'ella.hall@example.com', '+91 1234567819', 'Ell@ttH@ll6', 'ella_hall.jpg', 2),
('Alexander Allen', '5566 Cedar Avenue, Zone', 'alexander.allen@example.com', '+91 1234567820', 'Al3tx@ndr7', 'alexander_allen.jpg', 3),
('Aiden Young', '6677 Walnut Street, Locale', 'aiden.young@example.com', '+91 1234567821', 'Attid3nY8!', 'aiden_young.jpg', 4)


Steps for connecting to mysql local host db:

  db:{
        host:"localhost",
        user:"root",
        password:"admin12345",
        database: "db_hospitaldemo",
    }
THe connection details can be found in config.js file. For successful connection change password and database as per the convinience.

For starting server:
press command: npm start


REST API For 2 cases:

Posting Patient Details:

HTTP Method: POST
URL: http://localhost:4000/patientdetails/?hospital_id=1
Body: Form data with two key-value pairs:
patient: Upload image file for the patient.
data: JSON object containing patient details (name, address, email, password, phone).


Getting Hospital Details:

HTTP Method: GET
URL: http://localhost:4000/psychiatristdetails/?id=2
Response: JSON object containing hospital details, psychiatrist count, patients count, and psychiatrist details. The structure matches the format specified in the readme file.
These endpoints provide functionality for both posting patient details and retrieving hospital details, which are essential features for a hospital management system. It's important to ensure proper validation and authentication mechanisms are in place for handling sensitive patient data. Additionally, error handling and logging should be implemented to enhance the robustness of the API.