report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\1615245589_test-card-default_0_data-qacard_0_tablet_h.png",
        "test": "..\\bitmaps_test\\20190907-235751\\1615245589_test-card-default_0_data-qacard_0_tablet_h.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "1615245589_test-card-default_0_data-qacard_0_tablet_h.png",
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
          "misMatchPercentage": "7.45",
          "analysisTime": 31
        },
        "diffImage": "..\\bitmaps_test\\20190907-235751\\failed_diff_1615245589_test-card-default_0_data-qacard_0_tablet_h.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\1615245589_test-card-hover_0_data-qacard_0_tablet_h.png",
        "test": "..\\bitmaps_test\\20190907-235751\\1615245589_test-card-hover_0_data-qacard_0_tablet_h.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "1615245589_test-card-hover_0_data-qacard_0_tablet_h.png",
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
          "misMatchPercentage": "7.54",
          "analysisTime": 31
        },
        "diffImage": "..\\bitmaps_test\\20190907-235751\\failed_diff_1615245589_test-card-hover_0_data-qacard_0_tablet_h.png"
      },
      "status": "fail"
    }
  ]
});