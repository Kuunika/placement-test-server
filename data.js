module.exports = {
  input1: {
    "target": 0,
    "data": [
      {
        "id": 1,
        "displayName": "OPD",
        "fullName": "Out Patient Diagnosis",
        "category": "Clinical",
        "parentId": 0
      },
      {
        "id": 2,
        "displayName": "IPD",
        "fullName": "In-Patient Diagnosis",
        "category": "Clinical",
        "parentId": 0
      },
      {
        "id": 3,
        "displayName": "IMCI",
        "fullName": "Integrated Management of Child Illnesses",
        "category": "Clinical",
        "parentId": 0
      },
      {
        "id": 4,
        "displayName": "ARI",
        "fullName": "Out Patient Diagnosis",
        "category": "Clinical",
        "parentId": 3
      },
      {
        "id": 5,
        "displayName": "Pnemuenia Treatment",
        "fullName": "Pnemuenia Treatment",
        "category": "Clinical",
        "parentId": 4
      },
      {
        "id": 6,
        "displayName": "Treatment of Severe Pnemuenia",
        "fullName": "Treatment of Severe Pnemuenia",
        "category": "Clinical",
        "parentId": 4
      },
      {
        "id": 7,
        "displayName": "Diarrheal Diseases",
        "fullName": "Diarrheal Diseases",
        "category": "Clinical",
        "parentId": 4
      },
    ]
  },
  input2: {
    "target": 1,
    "data": [
      {
        "id": 1,
        "displayName": "Rotavirus",
        "fullName": "Rotavirus",
        "category": "Vaccination",
        "parentId": 0
      },
      {
        "id": 2,
        "displayName": "Laboratory",
        "fullName": "Laboratory",
        "category": "Diagnostics",
        "parentId": 0
      },
      {
        "id": 3,
        "displayName": "Clinical chemistry",
        "fullName": "Clinical chemistry",
        "category": "Diagnostics",
        "parentId": 2
      },
    ]
  },
  input3: {
    "target": 3,
    "data": [
      {
        "id": 1,
        "displayName": "Rotavirus",
        "fullName": "Rotavirus",
        "category": "Vaccination",
        "parentId": 0
      },
      {
        "id": 2,
        "displayName": "Laboratory",
        "fullName": "Laboratory",
        "category": "Diagnostics",
        "parentId": 0
      },
      {
        "id": 3,
        "displayName": "Clinical chemistry",
        "fullName": "Clinical chemistry",
        "category": "Diagnostics",
        "parentId": 2
      },
    ]
  },
  input4: {
    target: 3,
    data:
      [{
        id: 10,
        displayName: 'Treatment of severe diarrhoea',
        fullName: 'Treatment of severe diarrhoea',
        category: 'Clinical',
        parentId: 7
      },
      {
        id: 1,
        displayName: 'OPD',
        fullName: 'Out Patient Diagnostics',
        category: 'Clinical',
        parentId: 0
      },
      {
        id: 2,
        displayName: 'IPD',
        fullName: 'In Patient Diagnostics',
        category: 'Clinical',
        parentId: 0
      },
      {
        id: 4,
        displayName: 'ARI',
        fullName: 'ARI Service',
        category: 'Clinical',
        parentId: 3
      },
      {
        id: 2,
        displayName: 'IPD',
        fullName: 'In Patient Diagnostics',
        category: 'Clinical',
        parentId: 0
      },
      {
        id: 3,
        displayName: 'IMCI',
        fullName: 'Integrated Management of Child Illnesses',
        category: 'Clinical',
        parentId: 0
      },
      {
        id: 5,
        displayName: 'Pneumonia treatment',
        fullName: 'Pneumonia treatment',
        category: 'Clinical',
        parentId: 4
      },
      {
        id: 6,
        displayName: 'Treatment of severe Pneumonia',
        fullName: 'Treatment of severe Pneumonia',
        category: 'Clinical',
        parentId: 4
      },
      {
        id: 8,
        displayName: 'ORS',
        fullName: 'Oral rehydration therapy',
        category: 'Clinical',
        parentId: 7
      },
      {
        id: 7,
        displayName: 'Diarrhoea Disease',
        fullName: 'Diarrhoea Disease',
        category: 'Clinical',
        parentId: 3
      },
      {
        id: 9,
        displayName: 'ZINC',
        fullName: 'Zinc',
        category: 'Clinical',
        parentId: 7
      }]
  }
}