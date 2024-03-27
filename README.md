# QA_Project
![Uploading Narjes - Made with Clipchamp.gif…]()
# Testing Report for "stackinfo" Web Application

## Overview
Our team has rigorously tested the "stackinfo" web application using a combination of manual and automated techniques. The goal was to create a comprehensive testing strategy to ensure the application's reliability and functionality. "stackinfo" assesses the technological setups of startups and tech companies in Palestine and is built using ReactJS.

You can access the application at [stacksinfo.web.app](https://stacksinfo.web.app/).

---

## Manual Testing Report

### Component: Test Suite for Search

The manual testing phase focused on evaluating the search functionality within the "stackinfo" application. Our team meticulously tested various scenarios to ensure accurate results.

---

## Automated Testing Report
1-Search on( nablus company )--->the result  should be  4company 
2-search on( Ramallah company --->the result  should be  8 company
3- search on (Hebron company)--->the result  should be  1 company
4-check what the  result is when search on mobile
5-check what the  result is  when search on devOps
6-check what the  result is  when search on exalt mobile
7-check what the  result is  when search on bisan devops
8-check what the  result is  when  search on devops company it should be 9 
10-check what the  result is when search on olivery mobile
11-check what the  result is when search on frontend
12-check what the result  is when search on Jerusalem
13-check what the result  is when search on Jenin
14-check what the result  is when search on foothill
15-check what the result  is when search on C++ language
16-check what the result  is when search on Najah company
17-check what the result  is when search on asal company
18-check what the result  is when search on exalt company
19-check  what the result  is when search on Adham  company
20-check what the result  is when search on Bisan company
21-check what the result  is when search on Al Andalus company
22-check what the result  is when search on fake company
23-check what the result  is  when search on Backend
24-check what the result  is when search on DBA
25-check  what the result  is the result when search on fake company
26-check  what the result  is when search on Ramallah Backend
27-check what the result  is when search on nablus mobile
28-check what the result  is when search on nablus Frontend
29-check what the result  is when search with full company name
30-check what the result  is when search with first letter of company name
31-check what the result  is when search for the company in capital letters
32-check what the result  is when search for a company using a letter in the middle of it name
33-check what the result  is when search for a company using the first three letters
34-check what the result  is when search for an input with a hyphen between words
35-check what the result  is when search for a number
36-check what the result  is when search for an input with a  symbols
37-check what the result  is when Open a topic from last history search menu
38-check what the result  is when remove all topics from last history search
39-check what the result  is when search  for a company using the first three letters

### Summary

- **Total Test Cases Executed:** 39
- **Number of Test Cases Passed:** 26
- **Failed Test Cases:** 13
- **Success Rate:** 66.6%
- **Failure Rate:** 33.4%

### Details

We executed a total of 40 test cases across different files, including:

1. **SearchPart1.cy.js**
2. **SearchPart2.cy.js**
3. **SearchPart3.cy.js**

Out of these, 28 test cases successfully passed, while 12 test cases encountered issues. Our automated testing framework provided valuable insights into the application's behavior and identified areas for improvement.

---

By combining manual and automated testing, we have thoroughly evaluated the "stackinfo" web application. We recommend addressing the failed test cases to enhance overall reliability and user experience.
