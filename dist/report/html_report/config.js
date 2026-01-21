report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Card_with_data-qa_card.png",
        "test": "..\\bitmaps_test\\20241008-135743\\Card_with_data-qa_card.png",
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
            "width": 0,
            "height": 1
          },
          "rawMisMatchPercentage": 13.457107843137257,
          "misMatchPercentage": "13.46",
          "analysisTime": 13
        },
        "diffImage": "..\\bitmaps_test\\20241008-135743\\failed_diff_Card_with_data-qa_card.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Link_with_data-qa_hover.png",
        "test": "..\\bitmaps_test\\20241008-135743\\Link_with_data-qa_hover.png",
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
            "width": 0,
            "height": 1
          },
          "rawMisMatchPercentage": 20.903186274509807,
          "misMatchPercentage": "20.90",
          "analysisTime": 13
        },
        "diffImage": "..\\bitmaps_test\\20241008-135743\\failed_diff_Link_with_data-qa_hover.png"
      },
      "status": "fail"
    }
  ]
});