# Brilliant Solution Architect Technical Challenge

We invite you to write a piece of code for this technical challenge. We've kept the problem statement concise, so it shouldn't demand too much of your time.

If you have any questions, please reach out to us via email. If the problem statement lacks specific details, feel free to make any decision you see fit. Your code won't be evaluated based on its ability to handle unmentioned aspects. Additionally, there's no requirement to persist any data to disk.

We're seeking a solution that reflects the code you would write on a real project. You can complete this task at your convenience—there's no fixed deadline.

Once you've finished the code, kindly place it in a private GitHub Gist and share the link with us.

## Problem Statement

Our HRIS system, Workday, has an endpoint `/employees` that provides an unpaged list of employees in the following format:

```json
[
  {
    "name": "Baz Ball",
    "email": "baz@example.com",
    "hire_date": "2023-08-01",
    "employment_type": "Full-Time"
  },
  {
    "name": "Foo Bar",
    "email": "foo@example.com",
    "hire_date": "2024-01-10",
    "employment_type": "Contract"
  }
]
```

A cron job queries this endpoint daily. We'd like you to write a JavaScript function that processes this list, identifying individuals eligible to receive gifts according to the specifications outlined in this workflow [document](https://docs.google.com/document/d/12syqUz2SKsNgAzLsDXEeKonvHtw4KAFOmLr-LWnbdpg/edit).

Your function should return a new JSON object as illustrated below. Employees should be grouped based on their years of service at Brilliant, but they should only appear in the list if they are scheduled to receive a gift that day.

```
{
  "0": [
    {
      "name": "Foo Bar",
      "email": "foo@example.com",
      "hire_date": "2023-08-01",
      "preferred_gift_id": 1234
    }
  ],
  "5": [
    {
      "name": "Baz Ball",
      "email": "baz@example.com",
      "hire_date": "2018-01-10",
      "preferred_gift_id": 4567
    }
  ]
}
```