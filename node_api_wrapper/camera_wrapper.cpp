#include <napi.h>
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/highgui/highgui.hpp"
#include "hikvision_double_camera.h"

static Napi::String Method(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  StereoCamera *cam = StereoCamera::GetInstance();
  // auto a = new StereoCamera();
  return Napi::String::New(env, "Hello, world! from c++");
}

static Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set(Napi::String::New(env, "hello"),
              Napi::Function::New(env, Method));
  return exports;
}

NODE_API_MODULE(hello, Init)
