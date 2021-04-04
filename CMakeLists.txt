cmake_minimum_required(VERSION 3.9)
cmake_policy(SET CMP0042 NEW)

project (stereo-camera-api)
include_directories(${CMAKE_JS_INC} "${PROJECT_SOURCE_DIR}/stereo-camera-lib/package/include/")
# include_directories("stereo-camera-lib/package/include")
FILE(GLOB HEADERS_FILE "stereo-camera-lib/package/include/*")
FILE(GLOB STEAEOLIB "stereo-camera-lib/package/lib/*")
MESSAGE(STATUS "find the current stereo-lib is ${STEAEOLIB}")

# Find OpenCV, you may need to set OpenCV_DIR variable
# to the absolute path to the directory containing OpenCVConfig.cmake file
# via the command line or GUI
find_package(OpenCV 3.4 REQUIRED HINTS "D:\\opencv-3.4.7\\build")

# If the package has been found, several variables will
# be set, you can find the full list with descriptions
# in the OpenCVConfig.cmake file.
# Print some message showing some of them
message(STATUS "OpenCV library status:")
message(STATUS "    config: ${OpenCV_DIR}")
message(STATUS "    version: ${OpenCV_VERSION}")
message(STATUS "    libraries: ${OpenCV_LIBS}")
message(STATUS "    include path: ${OpenCV_INCLUDE_DIRS}")



include_directories(${OpenCV_INCLUDE_DIRS})
link_libraries(${OpenCV_LIBS})

file(GLOB SOURCE_FILES "node_api_wrapper/*")
add_library(${PROJECT_NAME} SHARED ${CMAKE_JS_SRC} ${SOURCE_FILES} )
set_target_properties(${PROJECT_NAME} PROPERTIES PREFIX "" SUFFIX ".node")
target_link_libraries(${PROJECT_NAME} ${CMAKE_JS_LIB} ${STEAEOLIB})

# Include Node-API wrappers
execute_process(COMMAND node -p "require('node-addon-api').include"
        WORKING_DIRECTORY ${CMAKE_SOURCE_DIR}
        OUTPUT_VARIABLE NODE_ADDON_API_DIR
        )
string(REGEX REPLACE "[\r\n\"]" "" NODE_ADDON_API_DIR ${NODE_ADDON_API_DIR})

target_include_directories(${PROJECT_NAME} PRIVATE ${NODE_ADDON_API_DIR})

# define NPI_VERSION
add_definitions(-DNAPI_VERSION=3)
file(GLOB NODE_FILE "${PROJECT_SOURCE_DIR}/build/Release/${PROJECT_NAME}.node")
MESSAGE(STATUS "the node file is : ${NODE_FILE}")
file(COPY ${NODE_FILE} DESTINATION "${PROJECT_SOURCE_DIR}/src/addon/")