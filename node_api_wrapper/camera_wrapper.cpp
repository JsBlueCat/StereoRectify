#include "hikvision_double_camera.h"
#include "debug.h"
#include <napi.h>


static Napi::String StartCamera(const Napi::CallbackInfo &info) {
  Napi::Env env = info.Env();
  auto cam = StereoCamera::GetInstance();
  return Napi::String::New(env, "starting connecting camera\n");
}

static Napi::Boolean QueryCamera(const Napi::CallbackInfo &info) {
  Napi::Env env = info.Env();
  int id = info[0].As<Napi::Number>().Int32Value();
  std::shared_ptr<StereoCamera> cam = StereoCamera::GetInstance();
  auto err = cam->QueryCamera(id);
  if(err == ErrorInfo::CamNotFound || err == ErrorInfo::CamNotConnected || err == ErrorInfo::CamNotReady){
    StereoCamera::instance = nullptr;
  }
  return Napi::Boolean::New(env, err == ErrorInfo::Success);
}

static Napi::Boolean CaptureStereo(const Napi::CallbackInfo &info) {
  Napi::Env env = info.Env();
  return Napi::Boolean::New(env, true);
}

static Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set(Napi::String::New(env, "connect_camera_cpp"),
              Napi::Function::New(env, StartCamera));

  exports.Set(Napi::String::New(env, "query_camera_cpp"),
              Napi::Function::New(env, QueryCamera));
  return exports;
}

NODE_API_MODULE(camera_cpp_api, Init)
