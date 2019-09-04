report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\0525887371_test-card-default_0_data-qacard_0_tablet_h.png",
        "test": "..\\bitmaps_test\\20190904-233921\\0525887371_test-card-default_0_data-qacard_0_tablet_h.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "0525887371_test-card-default_0_data-qacard_0_tablet_h.png",
        "label": "test-card-default",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/product-cards/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "2.22",
          "analysisTime": 34
        },
        "diffImage": "..\\bitmaps_test\\20190904-233921\\failed_diff_0525887371_test-card-default_0_data-qacard_0_tablet_h.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\0525887371_test-card-hover_0_data-qacard_0_tablet_h.png",
        "test": "..\\bitmaps_test\\20190904-233921\\0525887371_test-card-hover_0_data-qacard_0_tablet_h.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "0525887371_test-card-hover_0_data-qacard_0_tablet_h.png",
        "label": "test-card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/product-cards/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.62",
          "analysisTime": 32
        }
      },
      "status": "pass"
    }
  ]
});