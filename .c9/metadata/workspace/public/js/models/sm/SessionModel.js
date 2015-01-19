{"filter":false,"title":"SessionModel.js","tooltip":"/public/js/models/sm/SessionModel.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":34,"column":40},"end":{"row":35,"column":0},"action":"insert","lines":["",""]},{"start":{"row":35,"column":0},"end":{"row":35,"column":12},"action":"insert","lines":["            "]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":12},"end":{"row":58,"column":33},"action":"insert","lines":["var dfd= new $.Deferred();","            this.save({user:userinfo}, {","                success:function(resultModel, result, s, sd){","                    var _login=result.isLogin;","                    if ((!_.isUndefined(result.isLogin)) && _login){","                        //login SUCCESS;","                        ","                        dfd.resolve();","                    } else {","                        if (_.isUndefined(result.user)){","                            dfd.reject({msg:result.msg});    ","                        } else {","                            dfd.reject({user:result.user, msg:result.msg});  ","                        }","                        ","                    }","                },","                error:function(e){","                    Dialog.error(e.msg);","                    dfd.reject();","                }","            });","            ","            return dfd.promise();"]}]}],[{"group":"doc","deltas":[{"start":{"row":58,"column":33},"end":{"row":59,"column":12},"action":"remove","lines":["","            "]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":28},"end":{"row":36,"column":36},"action":"remove","lines":["userinfo"]},{"start":{"row":36,"column":28},"end":{"row":36,"column":36},"action":"insert","lines":["userInfo"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":38},"end":{"row":36,"column":0},"action":"insert","lines":["",""]},{"start":{"row":36,"column":0},"end":{"row":36,"column":12},"action":"insert","lines":["            "]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":12},"end":{"row":36,"column":23},"action":"insert","lines":["options.url"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":38},"end":{"row":36,"column":23},"action":"remove","lines":["","            options.url"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":20},"end":{"row":50,"column":21},"action":"remove","lines":["var _login=result.isLogin;","                    if ((!_.isUndefined(result.isLogin)) && _login){","                        //login SUCCESS;","                        ","                        dfd.resolve();","                    } else {","                        if (_.isUndefined(result.user)){","                            dfd.reject({msg:result.msg});    ","                        } else {","                            dfd.reject({user:result.user, msg:result.msg});  ","                        }","                        ","                    }"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":23},"end":{"row":36,"column":24},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":24},"end":{"row":36,"column":25},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":25},"end":{"row":36,"column":26},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":26},"end":{"row":36,"column":27},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":27},"end":{"row":36,"column":28},"action":"insert","lines":[":"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":28},"end":{"row":36,"column":29},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":29},"end":{"row":36,"column":30},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":30},"end":{"row":36,"column":31},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":31},"end":{"row":36,"column":32},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":32},"end":{"row":36,"column":33},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":33},"end":{"row":36,"column":34},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":27},"end":{"row":36,"column":28},"action":"insert","lines":["P"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":28},"end":{"row":36,"column":29},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":29},"end":{"row":36,"column":30},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":30},"end":{"row":36,"column":31},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":36,"column":23},"end":{"row":36,"column":31},"action":"remove","lines":["initPass"]},{"start":{"row":36,"column":23},"end":{"row":36,"column":35},"action":"insert","lines":["initPassword"]}]}],[{"group":"doc","deltas":[{"start":{"row":58,"column":49},"end":{"row":58,"column":53},"action":"remove","lines":["user"]},{"start":{"row":58,"column":49},"end":{"row":58,"column":62},"action":"insert","lines":["initPasswordL"]}]}],[{"group":"doc","deltas":[{"start":{"row":58,"column":61},"end":{"row":58,"column":62},"action":"remove","lines":["L"]}]}],[{"group":"doc","deltas":[{"start":{"row":58,"column":28},"end":{"row":58,"column":29},"action":"insert","lines":["!"]}]}],[{"group":"doc","deltas":[{"start":{"row":58,"column":29},"end":{"row":58,"column":43},"action":"remove","lines":["_.isUndefined("]}]}],[{"group":"doc","deltas":[{"start":{"row":58,"column":48},"end":{"row":58,"column":49},"action":"remove","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":58,"column":28},"end":{"row":58,"column":29},"action":"remove","lines":["!"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":32},"end":{"row":61,"column":75},"action":"remove","lines":["","                            dfd.reject({user:result.user, msg:result.msg});"]}]}],[{"group":"doc","deltas":[{"start":{"row":58,"column":49},"end":{"row":59,"column":0},"action":"insert","lines":["",""]},{"start":{"row":59,"column":0},"end":{"row":59,"column":28},"action":"insert","lines":["                            "]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":28},"end":{"row":60,"column":75},"action":"insert","lines":["","                            dfd.reject({user:result.user, msg:result.msg});"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":75},"end":{"row":61,"column":61},"action":"remove","lines":["","                            dfd.reject({msg:result.msg});    "]}]}],[{"group":"doc","deltas":[{"start":{"row":61,"column":34},"end":{"row":62,"column":0},"action":"insert","lines":["",""]},{"start":{"row":62,"column":0},"end":{"row":62,"column":28},"action":"insert","lines":["                            "]}]}],[{"group":"doc","deltas":[{"start":{"row":62,"column":28},"end":{"row":63,"column":61},"action":"insert","lines":["","                            dfd.reject({msg:result.msg});    "]}]}],[{"group":"doc","deltas":[{"start":{"row":61,"column":34},"end":{"row":62,"column":28},"action":"remove","lines":["","                            "]}]}],[{"group":"doc","deltas":[{"start":{"row":58,"column":49},"end":{"row":59,"column":28},"action":"remove","lines":["","                            "]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":20},"end":{"row":38,"column":21},"action":"insert","lines":["ㅇ"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":20},"end":{"row":38,"column":21},"action":"remove","lines":["ㅇ"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":20},"end":{"row":38,"column":21},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":21},"end":{"row":38,"column":22},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":22},"end":{"row":38,"column":23},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":23},"end":{"row":38,"column":24},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":24},"end":{"row":38,"column":25},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":25},"end":{"row":38,"column":26},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":26},"end":{"row":38,"column":27},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":27},"end":{"row":38,"column":28},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":28},"end":{"row":38,"column":29},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":28},"end":{"row":38,"column":29},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":28},"end":{"row":38,"column":29},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":29},"end":{"row":38,"column":30},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":30},"end":{"row":38,"column":31},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":31},"end":{"row":38,"column":33},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":33},"end":{"row":38,"column":34},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":32},"end":{"row":38,"column":38},"action":"insert","lines":["result"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":68},"end":{"row":54,"column":40},"action":"remove","lines":["","                        //login SUCCESS;"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":68},"end":{"row":54,"column":0},"action":"insert","lines":["",""]},{"start":{"row":54,"column":0},"end":{"row":54,"column":24},"action":"insert","lines":["                        "]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":24},"end":{"row":55,"column":0},"action":"insert","lines":["",""]},{"start":{"row":55,"column":0},"end":{"row":55,"column":24},"action":"insert","lines":["                        "]}]}],[{"group":"doc","deltas":[{"start":{"row":56,"column":24},"end":{"row":56,"column":307},"action":"insert","lines":["{\"user\":{\"id\":\"140602\",\"name\":\"이정구\",\"password\":\"333\",\"dept_code\":\"7100\",\"dept_name\":null,\"name_commute\":\"이정구\",\"join_company\":\"2014-06-10\",\"leave_company\":\"\",\"privilege\":\"3\",\"admin\":0},\"id\":\"ZW0csQEVea2ZN1uVVCpjY7mOnEpYzFov\",\"auth\":null,\"isLogin\":true,\"initPassword\":false,\"msg\":null}"]}]}],[{"group":"doc","deltas":[{"start":{"row":56,"column":24},"end":{"row":56,"column":25},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":56,"column":25},"end":{"row":56,"column":26},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":24},"end":{"row":54,"column":43},"action":"insert","lines":["Cookie.get('token')"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":24},"end":{"row":54,"column":42},"action":"insert","lines":["$.cookie('saram');"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":54},"end":{"row":54,"column":59},"action":"remove","lines":["token"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":42},"end":{"row":54,"column":56},"action":"remove","lines":["Cookie.get('')"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":34},"end":{"row":54,"column":39},"action":"remove","lines":["saram"]},{"start":{"row":54,"column":34},"end":{"row":54,"column":40},"action":"insert","lines":["maxAge"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":24},"end":{"row":54,"column":25},"action":"insert","lines":["D"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":25},"end":{"row":54,"column":26},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":24},"end":{"row":54,"column":26},"action":"remove","lines":["Di"]},{"start":{"row":54,"column":24},"end":{"row":54,"column":30},"action":"insert","lines":["Dialog"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":30},"end":{"row":54,"column":31},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":31},"end":{"row":54,"column":32},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":32},"end":{"row":54,"column":33},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":33},"end":{"row":54,"column":34},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":34},"end":{"row":54,"column":35},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":35},"end":{"row":54,"column":36},"action":"insert","lines":["("]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":54},"end":{"row":54,"column":55},"action":"insert","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":46},"end":{"row":54,"column":52},"action":"remove","lines":["maxAge"]},{"start":{"row":54,"column":46},"end":{"row":54,"column":53},"action":"insert","lines":["expires"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":57},"end":{"row":55,"column":0},"action":"insert","lines":["",""]},{"start":{"row":55,"column":0},"end":{"row":55,"column":24},"action":"insert","lines":["                        "]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":24},"end":{"row":55,"column":25},"action":"insert","lines":["$"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":25},"end":{"row":55,"column":26},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":26},"end":{"row":55,"column":27},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":27},"end":{"row":55,"column":28},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":28},"end":{"row":55,"column":29},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":29},"end":{"row":55,"column":30},"action":"insert","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":30},"end":{"row":55,"column":31},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":30},"end":{"row":55,"column":31},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":30},"end":{"row":55,"column":31},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":31},"end":{"row":55,"column":32},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":32},"end":{"row":55,"column":34},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":34},"end":{"row":55,"column":35},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":57},"end":{"row":55,"column":35},"action":"remove","lines":["","                        $.cookie();"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":46},"end":{"row":54,"column":53},"action":"remove","lines":["expires"]},{"start":{"row":54,"column":46},"end":{"row":54,"column":47},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":47},"end":{"row":54,"column":48},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":48},"end":{"row":54,"column":49},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":49},"end":{"row":54,"column":50},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":49},"end":{"row":54,"column":50},"action":"remove","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":49},"end":{"row":54,"column":50},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":50},"end":{"row":54,"column":51},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":24},"end":{"row":54,"column":25},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":25},"end":{"row":54,"column":26},"action":"insert","lines":["/"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":8,"column":20},"end":{"row":8,"column":20},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1421567796960,"hash":"9b4e1b7460e8cfc19d7896f18855c7dc97258405"}