/*
Input :- 

const data = [
  { id: 1, name: "fund", parentID: null },
  { id: 2, name: "fund1", parentID: null },
  { id: 3, name: "fund3", parentID: 1 },
  { id: 4, name: "fund4", parentID: 3 },
  { id: 5, name: "fund5", parentID: 4 },
  { id: 6, name: "fund6", parentID: 2 }
];


output: - {
  "root": {
    "children": [
      {
        "id": 1,
        "name": "fund",
        "parentID": null,
        "children": [
          {
            "id": 3,
            "name": "fund3",
            "parentID": 1,
            "children": [
              {
                "id": 4,
                "name": "fund4",
                "parentID": 3,
                "children": [
                  {
                    "id": 5,
                    "name": "fund5",
                    "parentID": 4,
                    "children": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": 2,
        "name": "fund1",
        "parentID": null,
        "children": [
          {
            "id": 6,
            "name": "fund6",
            "parentID": 2,
            "children": []
          }
        ]
      }
    ]
  }
}
*/


const data = [
  { id: 1, name: "fund", parentID: null },
  { id: 2, name: "fund1", parentID: null },
  { id: 3, name: "fund3", parentID: 1 },
  { id: 4, name: "fund4", parentID: 3 },
  { id: 5, name: "fund5", parentID: 4 },
  { id: 6, name: "fund6", parentID: 2 }
];


function buildTree (data, parentID=null){
  return data
  .filter((item)=> item.parentID ===parentID)
  .map((item)=>({...item, children: buildTree(data, item.id)}))
}



const tree = {
    root:{
        children: buildTree(data)
    }
}

console.log(JSON.stringify(tree))







