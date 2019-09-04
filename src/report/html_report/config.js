report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/01741094840_test-card-default_0_data-qacard_0_tablet_h.png",
        "test": "../bitmaps_test/20190904-171953/01741094840_test-card-default_0_data-qacard_0_tablet_h.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "01741094840_test-card-default_0_data-qacard_0_tablet_h.png",
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
            "width": -141,
            "height": 137
          },
          "misMatchPercentage": "58.07",
          "analysisTime": 56
        },
        "diffImage": "../bitmaps_test/20190904-171953/failed_diff_01741094840_test-card-default_0_data-qacard_0_tablet_h.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/01741094840_test-card-hover_0_data-qacard_0_tablet_h.png",
        "test": "../bitmaps_test/20190904-171953/01741094840_test-card-hover_0_data-qacard_0_tablet_h.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "01741094840_test-card-hover_0_data-qacard_0_tablet_h.png",
        "label": "test-card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/product-cards/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "engineErrorMsg": "waiting for selector \"[data-qa=\"hover\"]\" failed: timeout 30000ms exceeded",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 32,
            "height": -223
          },
          "misMatchPercentage": "44.51",
          "analysisTime": 25
        },
        "diffImage": "../bitmaps_test/20190904-171953/failed_diff_01741094840_test-card-hover_0_data-qacard_0_tablet_h.png"
      },
      "status": "fail"
    }
  ]
});