Project needs:

Capstone Proposal:
README: Project Overview

## Project Proposal / Overview
 _This application is intended to assist users in taking charge of and managing their health, by providing a centralized cloud-based solution for keeping track of, taking notes on, and mapping out, medications, medical appointments, and measuring day to day quality of life. The intended user of this application is someone dealing with chronic illness, or their caretaker. In order to make this accessible during medical appointments, application will be a mobile application._

 ## User Stories

 ### Medication List
 * As a user, I want to be able to create and manage a list of medications and supplements I am currently, or have previously been taking.
 * As a user, I want to be able to add new medications and supplements to the medication list.
 * As a user, I want to be able to remove medications and supplements from the medication list.
 * As a user, I want to be able to take notes on each medication/supplement, for the following fields: medication, prescribed by, prescribed date, purpose of prescribing, known side effects, dosage, quantity, frequency and amount of intake, and side effects I am experiencing/noticing.
 * As a user, I want to be able to update any medication/supplement list entry at any time.
 * As a user, I want any listing in my medication list, so long as I provide information regarding quantity and medication start date, to list when the medication will run out.

 ### Appointment List
 * As a user, I want to keep track of my past, present, and upcoming medical appointments.
 * As a user, I want to store the following information regarding a medical appointment: Date and time of Appointment, medical professional I will be meeting with, purpose of appointment, questions I have before the appointment, notes from/during appointment, takeaway/what's changed from the appointment (e.g., new medication).

 ### Daily QOL Notes
 * As a user, I want the ability to rate my Quality Of Life for any given day, using several metrics: pain, nausea, overall rating.
 * As a user, I want the ability to take notes on any particular day to keep track of anything I might need (e.g., number of bowel movements, localization of pain, food or activity that caused me to feel nauseaus).
 * As a user, I want the ability to look back at any day, or see my QOL ratings side-by-side for a given week or month (perhaps in color-coded calendar) to provide concrete context and evidence when speaking with my health providers.

 ### Calendar
 * As a user, I want the ability to access upcoming, current, and past QOL ratings, appointments, and notifications within a centralized calendar view.
 * As a user, I want the ability to sync prescription filling reminders, and medical appointments to my Google Calendar.

 ### Notifications/Upcoming
 * As a user, I want a portion in the application to remind me of upcoming medical appointments, medication refil reminders etc.
 * As a user, I want the application to remind me to submit a QOL rating for the day via push notifications on my mobile device, and within the device itself.

 ### API Consuming features
 * As a user, I want the option to pre-load information regarding a medication into my medication list entries when desired.
 * As a user, I want this applications calendar to sync with my Google Calendar.

 ## Diagrams

 ### Home Layout Mockup
 ![HomeScreen Layout](./ReadmeImg/HomeLayout.JPG)

 ### Component Scaffolding
  ![Component Scaffolding](./ReadmeImg/ComponentScaffolding.jpg)

  ## Technologies
  * React-native
  * JavaScript
  * React-redux
  * Redux
  * CSS
  * HTML
  * Flexbox
  * Bootstrap
  * Expo.io
  * Jest
  * API Calls
  * react-native-community/hooks
  * Firebase/Firestore


  ## ToDo List

  * Find API for Medication information
  * Study documentation for Google Calendar
  * Look into Calendars with firebase
  * Layout database structure (collections), and expected document values
  * Find React-native template, and view tag resource
  * Build the application!

  ## Stretch goals
  * View transition animations!!

  ## API Information

  * Drug Adverse Effects: https://open.fda.gov/apis/drug/event/

  ## Resources
  * React Native Tutorial: https://www.youtube.com/watch?v=0-S5a0eXPoc&ab_channel=ProgrammingwithMosh


  ## Original Proposal

  Name of Student: _Ian Scott_

Name of Project:  Health tracker app (Working Title)

Project's Purpose or Goal: This project would be to develop an application for the chronically ill, and provide a tool for keeping track of medications, medication side effects, Dr's visits, dr's visits notes, and self-reporting of general health (side effects, pain, nausea) via likert-scales. Ideally this project would include some graphical representation of self-reported data

List the absolute minimum features the project requires to meet this purpose or goal:
Keep a list of current medication, known side-effects, side-effects that are presenting with the user. Include start-date, prescribing Dr. Reason for prescribing etc. 
List/schedule of of upcoming and past Dr's appointments, with sections for notes/discussion topics leading up to the visit (i.e., what does the user want to ask/get help with?) and store notes from the visit
Ability to store diagnoses and illness related information specific to the user. 

What tools, frameworks, libraries, APIs, modules and/or other resources will you use to create this MVP? List them all here. Be specific.
React
JS
API calls
Bootstrap
CSS Grid
Jest
Visual Studio Code

If you finish developing the minimum viable product (MVP) with time to spare, what will you work on next? Describe these features here: be specific
User Authentications/login/credentials
chart.js for graphical representation of self-reported data
ability to generate/submit self-reporting for user health state (pain, discomfort, nausea etc.)
Calendar integration (add Dr's visits to calendar, daily listings of medicine's/prescriptions which must be taken)
API that retrieves Drug information (side effects, dosages, purpose/reason drug is generally prescribed etc).
Build for Mobile
Alerts/Reminders for taking a medication
Images of pills or description of what they look like for easier identification

What additional tools, frameworks, libraries, API's, or other resources will these additional features require?
Firebase (for storing and retrieving multiple users data etc)
Medicine/Drup API (have not yet found one that would be a great fit)
React Native
chart.js
Possibly google calendar integration ( but I have had bad experiences with google APIs  and developer services, so may avoid for another solution)