const axios = require("axios");

const _call_omishima_api = (method, route, params) => {
  let baseUrl = "https://yado-kari.herokuapp.com/api/v1/";

  if (method == "get") {
    return axios.get(baseUrl + route, {});
  } else {
    return axios.post(baseUrl + route, params);
  }
};

const showResult = function showResult_d(data) {
  const outResult = data.map(item => item.id + ": " + item.name);
  console.log(outResult.join("\n"));
};

exports.get_yados_list = () => {
  const method = "get";
  const route = "yados";
  _call_omishima_api(method, route, {}).then(res => showResult(res.data));
};

exports.reserve_yado = params => {
  const method = "post";
  const route = "yados/" + params.yado_id + "/reservations";
  _call_omishima_api(method, route, params).then(res =>
    console.log(
      "applied with a yadokari command 🎉 \n generated key => " + res.data.token
    )
  );
};

exports.get_me = params => {
  const method = "get";
  const route = "me/" + params;
  _call_omishima_api(method, route, params).then(res => console.log(res.data));
};

// todo set yado params
exports.get_schedules = params => {
  const method = "get";
  const route = "yados/1/schedules";
  _call_omishima_api(method, route, params).then(res => console.log(res.data));
};
