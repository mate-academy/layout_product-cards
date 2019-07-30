report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/958268670_test-card-default_0_data-qacard_0_tablet_h.png",
        "test": "../bitmaps_test/20190730-223755/958268670_test-card-default_0_data-qacard_0_tablet_h.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "958268670_test-card-default_0_data-qacard_0_tablet_h.png",
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
            "height": -1
          },
          "misMatchPercentage": "0.78",
          "analysisTime": 35
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/958268670_test-card-hover_0_data-qacard_0_tablet_h.png",
        "test": "../bitmaps_test/20190730-223755/958268670_test-card-hover_0_data-qacard_0_tablet_h.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "958268670_test-card-hover_0_data-qacard_0_tablet_h.png",
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
            "height": -1
          },
          "misMatchPercentage": "0.98",
          "analysisTime": 42
        }
      },
      "status": "pass"
    }
  ]
});