report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\013709837_test-card-default_0_data-qacard_0_tablet_h.png",
        "test": "..\\bitmaps_test\\20190904-230100\\013709837_test-card-default_0_data-qacard_0_tablet_h.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "013709837_test-card-default_0_data-qacard_0_tablet_h.png",
        "label": "test-card-default",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/product-cards/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -2
          },
          "misMatchPercentage": "0.54",
          "analysisTime": 36
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\013709837_test-card-hover_0_data-qacard_0_tablet_h.png",
        "test": "..\\bitmaps_test\\20190904-230100\\013709837_test-card-hover_0_data-qacard_0_tablet_h.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "013709837_test-card-hover_0_data-qacard_0_tablet_h.png",
        "label": "test-card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/product-cards/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -2
          },
          "misMatchPercentage": "0.52",
          "analysisTime": 40
        }
      },
      "status": "pass"
    }
  ]
});