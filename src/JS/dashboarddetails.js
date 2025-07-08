 let canvasWidthValue = 800;
 let canvasHeightValue = 400;

// Sidebar toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const body = document.body;
    const sidebarOverlay = document.querySelector('.sidebar-overlay');
    
    // Toggle sidebar when button is clicked
    sidebarToggle.addEventListener('click', function() {
        if (body.classList.contains('sidebar-hidden')) {
            body.classList.remove('sidebar-hidden');
            body.classList.add('sidebar-shown');
        } else {
            body.classList.remove('sidebar-shown');
            body.classList.add('sidebar-hidden');
        }
    });
    
    // Close sidebar when clicking outside of it
    sidebarOverlay.addEventListener('click', function() {
        body.classList.remove('sidebar-shown');
        body.classList.add('sidebar-hidden');
    });
    
    // Close sidebar on window resize if screen becomes larger than mobile
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && body.classList.contains('sidebar-shown')) {
            body.classList.remove('sidebar-shown');
            body.classList.add('sidebar-hidden');
        }
    });
});

function logout(){
    localStorage.removeItem('Token');
    localStorage.removeItem('FirstName');
    localStorage.removeItem('LastName');
    window.location.href = 'login.html'
}

// Function to update canvas dimensions based on screen size
function updateCanvasDimensions() {
    if (window.innerWidth < 768) {
      // Mobile dimensions
      canvasWidthValue = 300; // Smaller width for mobile
      canvasHeightValue = 240; // Smaller height for mobile
    } else {
      // Desktop dimensions
      canvasWidthValue = 800;
      canvasHeightValue = 400;
    }
  }
  
  // Function to toggle between menu states with animation
  
        // Main configuration object to store all chart data
  const chartConfig = {
      energy: {
          // Energy data structure
          monthEnd: {
              units: {
                  single: {
                      data: [220, 400],
                      labels: ['Current Month', 'Energy Benchmark'],
                      colors: ['orange', 'skyblue']
                  },
                  double: {
                      data: [4500, 3850, 8000],
                      labels: ['1st Property', '2nd Property', 'Energy Benchmark'],
                      colors: ['skyblue', 'blue', 'red']
                  },
                  triple: {
                      data: [450, 385, 420, 550],
                      labels: ['123 Main Energy', '456 Elm Energy', '789 Energy', 'Energy Benchmark'],
                      colors: ['skyblue', 'blue', 'green', 'red']
                  }
              },
              dollars: {
                  // Similar structure for dollars
                  single: {
                      data: [3200, 4500],
                      labels: ['Current Month', 'Energy Benchmark'],
                      colors: ['orange', 'skyblue']
                  },
                  double: {
                      data: [4500, 3850, 8000],
                      labels: ['1st Property', '2nd Property', 'Energy Benchmark'],
                      colors: ['skyblue', 'blue', 'red']
                  },
                  triple: {
                      data: [4500, 3850, 4200, 5500],
                      labels: ['123 Main Energy', '456 Elm Energy', '789 Energy', 'Energy Benchmark'],
                      colors: ['skyblue', 'blue', 'green', 'red']
                  }
              }
          },
          yearToDate: {
              units: {
                  single: {
                      data: [386, 142, 579, 234, 847, 695],
                      benchmark: [315, 315, 315, 315, 315, 315],
                      labels: ['July', 'August', 'September', 'October', 'November', 'December']
                  },
                  double: {
                      datasets: [
                          { label: '1st Property', data: [723, 458, 196, 512, 637, 289], color: 'skyblue' },
                          { label: '2nd Property', data: [346, 591, 827, 154, 683, 425], color: 'blue' }
                      ],
                      benchmark: [320, 320, 320, 320, 320, 320],
                      labels: ['July', 'August', 'September', 'October', 'November', 'December']
                  },
                  triple: {
                      datasets: [
                          { label: '123 Main Energy Usage', data: [516, 372, 894, 247, 638, 159], color: 'skyblue' },
                          { label: '456 Elm Energy Usage', data: [742, 186, 593, 427, 815, 369], color: 'yellow' },
                          { label: '789 Oak Energy Usage', data: [248, 531, 679, 412, 853, 197], color: 'lightgreen' }
                      ],
                      benchmark: [320, 320, 320, 320, 320, 320],
                      labels: ['July', 'August', 'September', 'October', 'November', 'December']
                  }
              },
              dollars: {
                  single: {
                      data: [3842, 2156, 4738, 1569, 3274, 4921],
                      benchmark: [3200, 3200, 3200, 3200, 3200, 3200],
                      labels: ['July', 'August', 'September', 'October', 'November', 'December']
                  },
                  double: {
                      datasets: [
                          { label: '1st Property', data: [2345, 3762, 1894, 4271, 2983, 1547], color: 'skyblue' },
                          { label: '2nd Property', data: [4182, 2739, 3615, 1928, 4763, 3092], color: 'blue' }
                      ],
                      benchmark: [3200, 3200, 3200, 3200, 3200, 3200],
                      labels: ['July', 'August', 'September', 'October', 'November', 'December']
                  },
                  triple: {
                      datasets: [
                          { label: '123 Main Energy Usage', data: [3526, 1879, 4215, 2943, 3681, 1754], color: 'skyblue' },
                          { label: '456 Elm Energy Usage', data: [2874, 4153, 1926, 3547, 2093, 4782], color: 'yellow' },
                          { label: '789 Oak Energy Usage', data: [1473, 4296, 3517, 2648, 3925, 1862], color: 'lightgreen' }
                      ],
                      benchmark: [3200, 3200, 3200, 3200, 3200, 3200],
                      labels: ['July', 'August', 'September', 'October', 'November', 'December']
                  }
              }
          },
          rollingTwelveMonths: {
              units: {
                  single: {
                      data: [237, 418, 165, 392, 274, 483, 129, 345, 416, 258, 374, 192],
                      benchmark: [300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300],
                      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                  },
                  double: {
                      datasets: [
                          { label: '1st Property', data: [283, 431, 176, 325, 457, 219, 387, 142, 471, 328, 265, 412], color: 'yellow' },
                          { label: '2nd Property', data: [195, 467, 218, 349, 126, 408, 273, 356, 487, 154, 309, 241], color: 'skyblue' }
                      ],
                      benchmark: [300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300],
                      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                  },
                  triple: {
                      datasets: [
                          { label: '123 Main Energy Usage', data: [352, 216, 479, 183, 415, 267, 493, 138, 386, 254, 312, 427], color: 'yellow' },
                          { label: '456 Elm Energy Usage', data: [287, 451, 164, 392, 235, 478, 147, 326, 415, 189, 357, 468], color: 'orange' },
                          { label: '789 Oak Energy Usage', data: [157, 428, 213, 346, 172, 391, 247, 463, 185, 329, 276, 403], color: 'lightgreen' }
                      ],
                      benchmark: [300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300],
                      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                  }
              },
              dollars: {
                  single: {
                      data: [3217, 1846, 4735, 2968, 3452, 1574, 4219, 2683, 3941, 2156, 4872, 3294],
                      benchmark: [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000],
                      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                  },
                  double: {
                      datasets: [
                          { label: '1st Property', data: [2461, 3875, 1923, 4726, 3184, 2579, 4312, 1768, 3954, 2847, 1635, 4293], color: 'yellow' },
                          { label: '2nd Property', data: [4127, 2843, 1596, 3762, 4951, 2318, 3675, 1429, 4583, 2176, 3842, 1957], color: 'skyblue' }
                      ],
                      benchmark: [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000],
                      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                  },
                  triple: {
                      datasets: [
                          { label: '123 Main Energy Usage', data: [3287, 4162, 1945, 3724, 2596, 4831, 2143, 3756, 4218, 1673, 3912, 2458], color: 'yellow' },
                          { label: '456 Elm Energy Usage', data: [1867, 4321, 2754, 3968, 1432, 4685, 2347, 3516, 1978, 4253, 2719, 3847], color: 'orange' },
                          { label: '789 Oak Energy Usage', data: [2514, 3876, 1742, 4359, 2187, 3625, 4891, 2347, 1563, 4129, 2874, 3651], color: 'lightgreen' }
                      ],
                      benchmark: [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000],
                      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                  }
              }
          }
      },
      naturalgas: {
          // Similar structure for natural gas
          monthEnd: {
              units: {
                  single: {
                      data: [220, 400],
                      labels: ['Current Month', 'Natural Gas Benchmark'],
                      colors: ['orange', 'skyblue']
                  },
                  double: {
                      data: [4500, 3850, 8000],
                      labels: ['1st Property', '2nd Property', 'Natural Gas Benchmark'],
                      colors: ['skyblue', 'blue', 'red']
                  },
                  triple: {
                      data: [450, 385, 420, 550],
                      labels: ['123 Main Natural Gas', '456 Elm Natural Gas', '789 Natural Gas', 'Natural Gas Benchmark'],
                      colors: ['skyblue', 'blue', 'green', 'red']
                  }
              },
              dollars: {
                  // Similar structure for dollars
                  single: {
                      data: [3257, 4500],
                      labels: ['Current Month', 'Natural Gas Benchmark'],
                      colors: ['orange', 'skyblue']
                  },
                  double: {
                      data: [4525, 3858, 8000],
                      labels: ['1st Property', '2nd Property', 'Natural Gas Benchmark'],
                      colors: ['skyblue', 'blue', 'red']
                  },
                  triple: {
                      data: [4587, 3852, 4283, 5500],
                      labels: ['123 Main Natural Gas', '456 Elm Natural Gas', '789 Natural Gas', 'Natural Gas Benchmark'],
                      colors: ['skyblue', 'blue', 'green', 'red']
                  }
              }
          },
          yearToDate: {
              units: {
                  single: {
                      data: [342, 187, 456, 219, 375, 298],
                      benchmark: [315, 315, 315, 315, 315, 315],
                      labels: ['July', 'August', 'September', 'October', 'November', 'December']
                  },
                  double: {
                      datasets: [
                          { label: '1st Property', data: [284, 413, 176, 359, 247, 482], color: 'skyblue' },
                          { label: '2nd Property', data: [312, 478, 165, 423, 286, 394], color: 'blue' }
                      ],
                      benchmark: [320, 320, 320, 320, 320, 320],
                      labels: ['July', 'August', 'September', 'October', 'November', 'December']
                  },
                  triple: {
                      datasets: [
                          { label: '123 Main Natural Gas Usage', data: [386, 214, 459, 173, 328, 492], color: 'skyblue' },
                          { label: '456 Elm Natural Gas Usage', data: [247, 435, 192, 367, 281, 418], color: 'yellow' },
                          { label: '789 Oak Natural Gas Usage', data: [329, 487, 156, 274, 403, 218], color: 'lightgreen' }
                      ],
                      benchmark: [320, 320, 320, 320, 320, 320],
                      labels: ['July', 'August', 'September', 'October', 'November', 'December']
                  }
              },
              dollars: {
                  single: {
                      data: [2374, 3851, 1526, 4735, 2918, 3462],
                      benchmark: [3200, 3200, 3200, 3200, 3200, 3200],
                      labels: ['July', 'August', 'September', 'October', 'November', 'December']
                  },
                  double: {
                      datasets: [
                          { label: '1st Property', data: [3157, 2486, 4932, 1743, 3861, 2574], color: 'skyblue' },
                          { label: '2nd Property', data: [4213, 1857, 3629, 2491, 4758, 3146], color: 'blue' }
                      ],
                      benchmark: [3200, 3200, 3200, 3200, 3200, 3200],
                      labels: ['July', 'August', 'September', 'October', 'November', 'December']
                  },
                  triple: {
                      datasets: [
                          { label: '123 Main Natural Gas Usage', data: [2847, 4125, 3569, 1832, 4671, 2943], color: 'skyblue' },
                          { label: '456 Elm Natural Gas Usage', data: [3742, 1968, 4235, 2794, 3516, 1487], color: 'yellow' },
                          { label: '789 Oak Natural Gas Usage', data: [2374, 4862, 1925, 3457, 4183, 2639], color: 'lightgreen' }
                      ],
                      benchmark: [3200, 3200, 3200, 3200, 3200, 3200],
                      labels: ['July', 'August', 'September', 'October', 'November', 'December']
                  }
              }
          },
          rollingTwelveMonths: {
              units: {
                  single: {
                      data: [241, 387, 156, 429, 315, 472, 184, 367, 423, 196, 352, 274],
                      benchmark: [300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300],
                      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                  },
                  double: {
                      datasets: [
                          { label: '1st Property', data: [326, 178, 457, 245, 391, 137, 486, 219, 374, 156, 428, 293], color: 'yellow' },
                          { label: '2nd Property', data: [185, 429, 267, 346, 172, 483, 217, 358, 416, 243, 307, 491], color: 'skyblue' }
                      ],
                      benchmark: [300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300],
                      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                  },
                  triple: {
                      datasets: [
                          { label: '123 Main Natural Gas Usage', data: [462, 197, 384, 253, 418, 143, 276, 495, 218, 365, 329, 471], color: 'yellow' },
                          { label: '456 Elm Natural Gas Usage', data: [254, 378, 183, 467, 215, 349, 126, 412, 287, 356, 143, 497], color: 'orange' },
                          { label: '789 Oak Natural Gas Usage', data: [321, 174, 456, 287, 135, 409, 246, 368, 195, 472, 318, 265], color: 'lightgreen' }
                      ],
                      benchmark: [300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300],
                      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                  }
              },
              dollars: {
                  single: {
                      data: [3476, 2183, 4295, 1872, 3951, 2634, 4178, 1527, 3842, 2396, 4753, 3169],
                      benchmark: [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000],
                      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                  },
                  double: {
                      datasets: [
                          { label: '1st Property', data: [2437, 3864, 1925, 4316, 2783, 3592, 1654, 4271, 3185, 2749, 4832, 3127], color: 'yellow' },
                          { label: '2nd Property', data: [3645, 1972, 4518, 2347, 3861, 2193, 4726, 3154, 1893, 4237, 2569, 3981], color: 'skyblue' }
                      ],
                      benchmark: [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000],
                      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                  },
                  triple: {
                      datasets: [
                          { label: '123 Main Natural Gas Usage', data: [2743, 4185, 1937, 3648, 2514, 4672, 3216, 1859, 4327, 2591, 3874, 1426], color: 'yellow' },
                          { label: '456 Elm Natural Gas Usage', data: [3158, 4726, 2391, 3847, 1532, 4269, 2873, 3645, 1987, 4523, 2768, 3419], color: 'orange' },
                          { label: '789 Oak Natural Gas Usage', data: [1834, 3527, 4712, 2165, 3896, 2473, 4358, 1629, 3241, 4957, 2386, 3742], color: 'lightgreen' }
                      ],
                      benchmark: [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000],
                      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                  }
              }
          }
      },
      electricity: {
          // Similar structure for electricity
          monthEnd: {
              units: {
                  single: {
                      data: [228, 400],
                      labels: ['Current Month', 'Electricity Benchmark'],
                      colors: ['orange', 'skyblue']
                  },
                  double: {
                      data: [452, 385, 400],
                      labels: ['1st Property', '2nd Property', 'Electricity Benchmark'],
                      colors: ['skyblue', 'blue', 'red']
                  },
                  triple: {
                      data: [450, 385, 420, 400],
                      labels: ['123 Main Electricity', '456 Elm Electricity', '789 Electricity', 'Electricity Benchmark'],
                      colors: ['skyblue', 'blue', 'green', 'red']
                  }
              },
              dollars: {
                  // Similar structure for dollars
                  single: {
                      data: [3273, 4000],
                      labels: ['Current Month', 'Electricity Benchmark'],
                      colors: ['orange', 'skyblue']
                  },
                  double: {
                      data: [3298, 3854, 4000],
                      labels: ['1st Property', '2nd Property', 'Electricity Benchmark'],
                      colors: ['skyblue', 'blue', 'red']
                  },
                  triple: {
                      data: [4589, 3850, 4238, 4000],
                      labels: ['123 Main Electricity', '456 Elm Electricity', '789 Electricity', 'Electricity Benchmark'],
                      colors: ['skyblue', 'blue', 'green', 'red']
                  }
              }
          },
          yearToDate: {
              units: {
                  single: {
                      data: [342, 187, 456, 278, 399, 153],
                      benchmark: [315, 315, 315, 315, 315, 315],
                      labels: ['July', 'August', 'September', 'October', 'November', 'December']
                  },
                  double: {
                      datasets: [
                          { label: '1st Property', data: [214, 389, 276, 149, 438, 301], color: 'skyblue' },
                          { label: '2nd Property', data: [482, 167, 356, 421, 289, 195], color: 'blue' }
                      ],
                      benchmark: [320, 320, 320, 320, 320, 320],
                      labels: ['July', 'August', 'September', 'October', 'November', 'December']
                  },
                  triple: {
                      datasets: [
                          { label: '123 Main Electricity Usage', data: [247, 413, 176, 358, 294, 469], color: 'skyblue' },
                          { label: '456 Elm Electricity Usage', data: [385, 129, 467, 231, 392, 178], color: 'yellow' },
                          { label: '789 Oak Electricity Usage', data: [321, 487, 156, 409, 243, 375], color: 'lightgreen' }
                      ],
                      benchmark: [320, 320, 320, 320, 320, 320],
                      labels: ['July', 'August', 'September', 'October', 'November', 'December']
                  }
              },
              dollars: {
                  single: {
                      data: [3421, 1867, 4562, 2783, 3998, 1534],
                      benchmark: [3200, 3200, 3200, 3200, 3200, 3200],
                      labels: ['July', 'August', 'September', 'October', 'November', 'December']
                  },
                  double: {
                      datasets: [
                          { label: '1st Property', data: [2147, 3892, 2765, 1498, 4387, 3012], color: 'skyblue' },
                          { label: '2nd Property', data: [4823, 1675, 3564, 4218, 2897, 1954], color: 'blue' }
                      ],
                      benchmark: [3200, 3200, 3200, 3200, 3200, 3200],
                      labels: ['July', 'August', 'September', 'October', 'November', 'December']
                  },
                  triple: {
                      datasets: [
                          { label: '123 Main Electricity Usage', data: [2475, 4132, 1768, 3584, 2943, 4691], color: 'skyblue' },
                          { label: '456 Elm Electricity Usage', data: [3856, 1293, 4675, 2317, 3927, 1784], color: 'yellow' },
                          { label: '789 Oak Electricity Usage', data: [3214, 4876, 1567, 4092, 2438, 3751], color: 'lightgreen' }
                      ],
                      benchmark: [3200, 3200, 3200, 3200, 3200, 3200],
                      labels: ['July', 'August', 'September', 'October', 'November', 'December']
                  }
              }
          },
          rollingTwelveMonths: {
              units: {
                  single: {
                      data: [342, 187, 456, 278, 399, 153, 267, 415, 321, 198, 473, 246],
                      benchmark: [300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300],
                      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                  },
                  double: {
                      datasets: [
                          { label: '1st Property', data: [214, 389, 276, 149, 438, 301, 167, 425, 352, 197, 283, 416], color: 'yellow' },
                          { label: '2nd Property', data: [482, 167, 356, 421, 289, 195, 378, 249, 354, 402, 159, 317], color: 'skyblue' }
                      ],
                      benchmark: [300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300],
                      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                  },
                  triple: {
                      datasets: [
                          { label: '123 Main Electricity Usage', data: [247, 413, 176, 358, 294, 469, 325, 182, 437, 269, 385, 142], color: 'yellow' },
                          { label: '456 Elm Electricity Usage', data: [385, 129, 467, 231, 392, 178, 443, 256, 309, 165, 421, 287], color: 'orange' },
                          { label: '789 Oak Electricity Usage', data: [321, 487, 156, 409, 243, 375, 218, 362, 419, 173, 297, 456], color: 'lightgreen' }
                      ],
                      benchmark: [300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300],
                      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                  }
              },
              dollars: {
                  single: {
                      data: [3421, 1867, 4562, 2783, 3998, 1534, 4127, 2359, 3846, 1975, 4293, 2715],
                      benchmark: [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000],
                      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                  },
                  double: {
                      datasets: [
                          { label: '1st Property', data: [2147, 3892, 2765, 1498, 4387, 3012, 1923, 4736, 2589, 3417, 1845, 4269], color: 'yellow' },
                          { label: '2nd Property', data: [4823, 1675, 3564, 4218, 2897, 1954, 3782, 2431, 4196, 3058, 2417, 3945], color: 'skyblue' }
                      ],
                      benchmark: [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000],
                      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                  },
                  triple: {
                      datasets: [
                          { label: '123 Main Electricity Usage', data: [2475, 4132, 1768, 3584, 2943, 4691, 3217, 1894, 4376, 2658, 3972, 1543], color: 'yellow' },
                          { label: '456 Elm Electricity Usage', data: [3856, 1293, 4675, 2317, 3927, 1784, 4512, 2876, 1439, 4068, 2754, 3192], color: 'orange' },
                          { label: '789 Oak Electricity Usage', data: [3214, 4876, 1567, 4092, 2438, 3751, 1926, 4583, 2847, 3615, 1782, 4359], color: 'lightgreen' }
                      ],
                      benchmark: [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000],
                      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                  }
              }
          }
      },
      water: {
          // Similar structure for water
          monthEnd: {
              units: {
                  single: {
                      data: [225, 400],
                      labels: ['Current Month', 'Water Benchmark'],
                      colors: ['orange', 'skyblue']
                  },
                  double: {
                      data: [352, 385, 400],
                      labels: ['1st Property', '2nd Property', 'Water Benchmark'],
                      colors: ['skyblue', 'blue', 'red']
                  },
                  triple: {
                      data: [286, 385, 420, 400],
                      labels: ['123 Main Water', '456 Elm Water', '789 Water', 'Water Benchmark'],
                      colors: ['skyblue', 'blue', 'green', 'red']
                  }
              },
              dollars: {
                  // Similar structure for dollars
                  single: {
                      data: [3200, 4500],
                      labels: ['Current Month', 'Water Benchmark'],
                      colors: ['orange', 'skyblue']
                  },
                  double: {
                      data: [4500, 3850, 8000],
                      labels: ['1st Property', '2nd Property', 'Water Benchmark'],
                      colors: ['skyblue', 'blue', 'red']
                  },
                  triple: {
                      data: [4500, 3850, 4200, 5500],
                      labels: ['123 Main Water', '456 Elm Water', '789 Water', 'Water Benchmark'],
                      colors: ['skyblue', 'blue', 'green', 'red']
                  }
              }
          },
          yearToDate: {
              units: {
                  single: {
                      data: [220, 255, 210, 295, 230, 330],
                      benchmark: [315, 315, 315, 315, 315, 315],
                      labels: ['July', 'August', 'September', 'October', 'November', 'December']
                  },
                  double: {
                      datasets: [
                          { label: '1st Property', data: [260, 250, 270, 220, 240, 210], color: 'skyblue' },
                          { label: '2nd Property', data: [380, 275, 420, 350, 300, 400], color: 'blue' }
                      ],
                      benchmark: [320, 320, 320, 320, 320, 320],
                      labels: ['July', 'August', 'September', 'October', 'November', 'December']
                  },
                  triple: {
                      datasets: [
                          { label: '123 Main Water Usage', data: [310, 290, 300, 320, 390, 350], color: 'skyblue' },
                          { label: '456 Elm Water Usage', data: [380, 275, 420, 350, 300, 400], color: 'yellow' },
                          { label: '789 Oak Water Usage', data: [370, 265, 320, 330, 350, 280], color: 'lightgreen' }
                      ],
                      benchmark: [320, 320, 320, 320, 320, 320],
                      labels: ['July', 'August', 'September', 'October', 'November', 'December']
                  }
              },
              dollars: {
                  single: {
                      data: [2256, 2535, 2115, 2967, 2336, 3389],
                      benchmark: [3200, 3200, 3200, 3200, 3200, 3200],
                      labels: ['July', 'August', 'September', 'October', 'November', 'December']
                  },
                  double: {
                      datasets: [
                          { label: '1st Property', data: [2668, 2990, 2506, 2205, 2109, 2408], color: 'skyblue' },
                          { label: '2nd Property', data: [3800, 2755, 4203, 3508, 3002, 4009], color: 'blue' }
                      ],
                      benchmark: [3200, 3200, 3200, 3200, 3200, 3200],
                      labels: ['July', 'August', 'September', 'October', 'November', 'December']
                  },
                  triple: {
                      datasets: [
                          { label: '123 Main Water Usage', data: [3156, 2934, 3025, 3278, 3914, 3509], color: 'skyblue' },
                          { label: '456 Elm Water Usage', data: [3889, 2751, 4256, 3523, 3467, 4089], color: 'yellow' },
                          { label: '789 Oak Water Usage', data: [3715, 2667, 3246, 3317, 3589, 2847], color: 'lightgreen' }
                      ],
                      benchmark: [3200, 3200, 3200, 3200, 3200, 3200],
                      labels: ['July', 'August', 'September', 'October', 'November', 'December']
                  }
              }
          },
          rollingTwelveMonths: {
              units: {
                  single: {
                      data: [310, 280, 330, 270, 310, 300, 290, 250, 280, 310, 300, 295],
                      benchmark: [300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300],
                      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                  },
                  double: {
                      datasets: [
                          { label: '1st Property', data: [300, 290, 330, 310, 320, 300, 310, 305, 320, 330, 310, 295], color: 'yellow' },
                          { label: '2nd Property', data: [295, 310, 320, 310, 300, 280, 290, 300, 295, 300, 310, 300], color: 'skyblue' }
                      ],
                      benchmark: [300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300],
                      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                  },
                  triple: {
                      datasets: [
                          { label: '123 Main Water Usage', data: [300, 290, 330, 310, 320, 300, 310, 305, 320, 330, 310, 295], color: 'yellow' },
                          { label: '456 Elm Water Usage', data: [320, 300, 300, 290, 300, 280, 270, 285, 260, 300, 290, 235], color: 'orange' },
                          { label: '789 Oak Water Usage', data: [290, 250, 270, 230, 260, 220, 210, 245, 190, 210, 210, 155], color: 'lightgreen' }
                      ],
                      benchmark: [300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300],
                      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                  }
              },
              dollars: {
                  single: {
                      data: [4173, 3851, 5264, 7412, 6325, 2758, 9124, 3546, 6781, 4259, 5823, 7691],
                      benchmark: [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000],
                      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                  },
                  double: {
                      datasets: [
                          { label: '1st Property', data: [5827, 3946, 7812, 4263, 6518, 9374, 4215, 7863, 5128, 6394, 2857, 4193], color: 'yellow' },
                          { label: '2nd Property', data: [4286, 7513, 3942, 6158, 8427, 5239, 3764, 9124, 4673, 5812, 6347, 2958], color: 'skyblue' }
                      ],
                      benchmark: [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000],
                      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                  },
                  triple: {
                      datasets: [
                          { label: '123 Main Water Usage', data: [6284, 4157, 8392, 5783, 3619, 7246, 5821, 9354, 4726, 6183, 7294, 5218], color: 'yellow' },
                          { label: '456 Elm Water Usage', data: [4825, 7316, 5943, 8274, 3561, 6942, 5238, 7163, 4592, 8137, 6425, 3948], color: 'orange' },
                          { label: '789 Oak Water Usage', data: [3614, 5782, 4293, 6821, 5147, 3926, 7453, 4862, 5371, 6942, 4253, 7815], color: 'lightgreen' }
                      ],
                      benchmark: [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000],
                      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                  }
              }
          }
      }
  };
  
  // Utility names for display
  const utilityNames = {
      'energy': 'Energy',
      'naturalgas': 'Natural Gas',
      'electricity': 'Electricity',
      'water': 'Water'
  };
  
  // View type names for display
  const viewTypeNames = {
      'monthend': 'Month End',
      'yeartodate': 'Year-to-Date',
      'rollingtwelvemonths': 'Rolling Twelve Months'
  };
  
  // Store current active chart instance
  let currentChart = null;
  
  // Initialize on page load
  window.onload = function() {
      initializeSelectedProperties();
  };
  
  function initializeSelectedProperties() {
      const selectedProperties = JSON.parse(localStorage.getItem('selectedProperties')) || [];
      
      selectedProperties.forEach(propertyId => {
          const checkbox = document.querySelector(`.property-checkbox[data-property="${propertyId}"]`);
          if (checkbox) {
              checkbox.checked = true;
          }
      });
  }
  
  function toggleDropdown(dropdownId) {
      const dropdown = document.getElementById(dropdownId);
      dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  }
  
  function displayChart(chartId, action) {
      // Parse the chart ID to extract utility type and view type
      const [utilityType, viewType] = chartId.split('-');
      
      // Get selected properties
      const selectedProperties = getSelectedProperties();
      
      // Create the chart container if it doesn't exist
      if (!document.getElementById('chart-container')) {
          createChartContainer();
      }
      
      // Show the chart container
      document.getElementById('chart-container').style.display = 'block';
      
      // Update title
      const title = `${utilityNames[utilityType]} Usage - ${viewTypeNames[viewType]}`;
      document.getElementById('chart-title').textContent = title;
      
      // Update toggle button
      const toggleBtn = document.getElementById('toggle-units-dollars');
      toggleBtn.textContent = action === 'units' ? 'Show in $' : 'Show in Units';
      toggleBtn.onclick = function() {
          displayChart(chartId, action === 'units' ? 'dollars' : 'units');
      };
      
      // Determine which chart configuration to use based on property count
      const propCount = selectedProperties.length;
      
      if (propCount === 0) {
          // No properties selected, show message
          document.getElementById('chart-message').textContent = 'Please select at least one property to view charts.';
          document.getElementById('chart-message').style.display = 'block';
          document.getElementById('chart-canvas-container').style.display = 'none';
          return;
      }
      
      // Hide message, show canvas
      document.getElementById('chart-message').style.display = 'none';
      document.getElementById('chart-canvas-container').style.display = 'block';
      
      // Determine property type for config
      let propType;
      if (propCount === 1) {
          propType = 'single';
      } else if (propCount === 2) {
          propType = 'double';
      } else {
          propType = 'triple';
      }
      
      // Create appropriate chart based on the view type
      if (viewType === 'monthend') {
          createBarChart(utilityType, action, propType);
      } else if (viewType === 'yeartodate' || viewType === 'rollingtwelvemonths') {
          createLineChart(utilityType, viewType, action, propType);
      }

      const section = document.getElementById('chart-title');
      if (section) {
        // Smooth scroll to the section
        section.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        
        // If on mobile, close the sidebar after clicking
        if (window.innerWidth < 768) {
          document.body.classList.remove('sidebar-shown');
          document.body.classList.add('sidebar-hidden');
        }
      }

      const energydropdown = document.getElementById('energy-dropdown');
      energydropdown.style.display = energydropdown.style.display = 'none';

      const gasdropdown = document.getElementById('natural-gas-dropdown');
      gasdropdown.style.display = gasdropdown.style.display = 'none';

      const electricitydropdown = document.getElementById('electricity-dropdown');
      electricitydropdown.style.display = electricitydropdown.style.display = 'none';

      const waterdropdown = document.getElementById('water-dropdown');
      waterdropdown.style.display = waterdropdown.style.display = 'none';
  }
  
  function createChartContainer() {
      // Create container for chart
      const container = document.createElement('div');
      container.id = 'chart-container';
      container.className = 'chart-container my-4';

       // Update dimensions based on current screen size
       updateCanvasDimensions();
      
      // Create HTML structure
      container.innerHTML = `
          <h2 id="chart-title" class="mb-4">Chart Title</h2>
          <div class="row">
              <div class="col-md-2 mb-3">
                  <button id="toggle-units-dollars" class="btn btn-primary">Units / $</button>
              </div>
              <div id="chart-canvas-container" class="col-md-10">
                  <canvas id="chart-canvas" width="${canvasWidthValue}" height="${canvasHeightValue}"></canvas>
              </div>
              <div id="chart-message" class="col-md-10 alert alert-info" style="display: none;">
                  Please select at least one property to view charts.
              </div>
          </div>
      `;
      
      // Add to page
      document.querySelector('.dashboardDetailsBody').appendChild(container);
  }
  
  function getSelectedProperties() {
      const checkboxes = document.querySelectorAll('.property-checkbox:checked');
      return Array.from(checkboxes).map(cb => cb.dataset.property);
  }
  
  function createBarChart(utilityType, action, propType) {
      // Get chart data
      const chartData = chartConfig[utilityType]?.monthEnd?.[action]?.[propType];
      if (!chartData) return;
      
      // Get canvas
      const ctx = document.getElementById('chart-canvas').getContext('2d');
      
      // Destroy previous chart if it exists
      if (currentChart) {
          currentChart.destroy();
      }
      
      // Create new chart
      currentChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: chartData.labels,
              datasets: [{
                  label: '',
                  data: chartData.data,
                  backgroundColor: chartData.colors
              }]
          },
          options: {
              responsive: true,
              plugins: {
                  legend: { display: false },
                  tooltip: { enabled: true }
              },
              scales: {
                  y: { 
                      beginAtZero: true, 
                      title: { 
                          display: true, 
                          text: `${utilityNames[utilityType]} Usage (${action === 'units' ? 'Units' : 'Dollars'})` 
                      } 
                  }
              }
          }
      });
  }
  
  function createLineChart(utilityType, viewType, action, propType) {
      // Get chart data
      const viewTypeKey = viewType === 'yeartodate' ? 'yearToDate' : 'rollingTwelveMonths';
      const chartData = chartConfig[utilityType]?.[viewTypeKey]?.[action]?.[propType];
      if (!chartData) return;
      
      // Get canvas
      const ctx = document.getElementById('chart-canvas').getContext('2d');
      
      // Destroy previous chart if it exists
      if (currentChart) {
          currentChart.destroy();
      }
      
      // Create datasets for the chart
      let datasets = [];
      
      if (propType === 'single') {
          // For single property
          datasets = [
              { 
                  label: 'Current Month', 
                  data: chartData.data, 
                  borderColor: 'orange', 
                  fill: true 
              },
              { 
                  label: `${utilityNames[utilityType]} Benchmark`, 
                  data: chartData.benchmark, 
                  borderColor: 'red', 
                  fill: true 
              }
          ];
      } else {
          // For multiple properties
          datasets = chartData.datasets.map(ds => ({
              label: ds.label,
              data: ds.data,
              borderColor: ds.color,
              fill: true
          }));
          
          // Add benchmark
          datasets.push({
              label: `${utilityNames[utilityType]} Benchmark`,
              data: chartData.benchmark,
              borderColor: 'red',
              fill: true
          });
      }
      
      // Create the chart
      currentChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: chartData.labels,
              datasets: datasets
          },
          options: {
              responsive: true,
              plugins: { 
                  legend: { position: 'bottom' }, 
                  tooltip: { enabled: true } 
              },
              scales: {
                  y: { 
                      beginAtZero: true, 
                      title: { 
                          display: true, 
                          text: `${utilityNames[utilityType]} Usage (${action === 'units' ? 'Units' : 'Dollars'})` 
                      } 
                  },
                  x: { 
                      title: { 
                          display: true, 
                          text: 'Months' 
                      } 
                  }
              }
          }
      });
  }
  
  function selectProperty(propertyId, address, value1, value2, value3, value4, cost, usage) {
      // Get the checkbox
      const checkbox = document.querySelector(`.property-checkbox[data-property="${propertyId}"]`);
      
      // Get current selected properties
      let selectedProperties = JSON.parse(localStorage.getItem('selectedProperties')) || [];
      
      if (checkbox.checked) {
          // Add to selected properties if not already there
          if (!selectedProperties.includes(propertyId)) {
              selectedProperties.push(propertyId);
          }
      } else {
          // Remove from selected properties
          selectedProperties = selectedProperties.filter(id => id !== propertyId);
      }
      
      // Save back to localStorage
      localStorage.setItem('selectedProperties', JSON.stringify(selectedProperties));
  }