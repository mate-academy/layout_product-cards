report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\013709837_test-card-default_0_data-qacard_0_tablet_h.png",
        "test": "..\\bitmaps_test\\20190904-212512\\013709837_test-card-default_0_data-qacard_0_tablet_h.png",
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
            "width": -2,
            "height": -2
          },
          "misMatchPercentage": "41.06",
          "analysisTime": 44
        },
        "diffImage": "..\\bitmaps_test\\20190904-212512\\failed_diff_013709837_test-card-default_0_data-qacard_0_tablet_h.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\013709837_test-card-hover_0_data-qacard_0_tablet_h.png",
        "test": "..\\bitmaps_test\\20190904-212512\\013709837_test-card-hover_0_data-qacard_0_tablet_h.png",
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
            "width": -2,
            "height": -2
          },
          "misMatchPercentage": "34.50",
          "analysisTime": 45
        },
        "diffImage": "..\\bitmaps_test\\20190904-212512\\failed_diff_013709837_test-card-hover_0_data-qacard_0_tablet_h.png"
      },
      "status": "fail"
    }
  ]
});