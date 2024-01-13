report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card.png",
        "test": "../bitmaps_test/20240113-165214/Card_with_data-qa_card.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "Card_with_data-qa_card.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/product-cards/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 2,
            "height": 4
          },
          "rawMisMatchPercentage": 39.356617647058826,
          "misMatchPercentage": "39.36",
          "analysisTime": 19
        },
        "diffImage": "../bitmaps_test/20240113-165214/failed_diff_Card_with_data-qa_card.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Link_with_data-qa_hover.png",
        "test": "../bitmaps_test/20240113-165214/Link_with_data-qa_hover.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "Link_with_data-qa_hover.png",
        "label": "Link with data-qa_hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/product-cards/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 2,
            "height": 4
          },
          "rawMisMatchPercentage": 34.97549019607843,
          "misMatchPercentage": "34.98",
          "analysisTime": 19
        },
        "diffImage": "../bitmaps_test/20240113-165214/failed_diff_Link_with_data-qa_hover.png"
      },
      "status": "fail"
    }
  ]
});