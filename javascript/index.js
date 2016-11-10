/**
 * Created by xiamingchen on 16-9-21.
 */

   // Stuff to do as soon as the DOM is ready


   // Stuff to do as soon as the DOM is ready


var inputParamId = 1;
var methodParamId = 1;
var resultId = 1;

function changeEnvWhenDebug(select_area) {
    if(select_area.value == 'cn'){
        select_env = document.getElementById("select_env");
        select_env.innerHTML = "<option value='online'>线上</option><th:block th:if='${session.isAdmin}'><option value='pre'>预发</option><option value='daily'>日常</option></th:block>";
    } else {
        select_env = document.getElementById("select_env");
        select_env.innerHTML = "<option value='online'>线上</option><th:block th:if='${session.isAdmin}'><option value='pre'>预发</option></th:block>";
    }
}

function addResult() {
    resultId++;
    var newTr = results.insertRow();
    newTr.id = 'result' + resultId + '_new';

    var newTd0 = newTr.insertCell();
    var newTd1 = newTr.insertCell();
    var newTd2 = newTr.insertCell();
    var newTd3 = newTr.insertCell();
    var newTd4 = newTr.insertCell();
    newTd0.innerHTML = "<td><input type='hidden' name='resultId' value='-1'/></td>";
    newTd1.innerHTML = "<td><input name='resultName'/></td>";
    newTd2.innerHTML = "<td><select name='resultType'>" +
        "<option value=''>-请选择-</option>" +
        "<option value='String'>String</option>" +
        "<option value='Boolean'>Boolean</option>" +
        "<option value='Double'>Double</option>" +
        "<option value='Float'>Float</option>" +
        "<option value='Long'>Long</option>" +
        "<option value='Integer'>Integer</option>" +
        "</select></td>";
    newTd3.innerHTML = "<td><input name='resultDescribe'/></td>";
    newTd4.innerHTML = "<td><input type='button' onclick=\"removeResult('" + resultId + "_new')\" value='删除该结果'/></td>"
}

function removeResult(id) {
    var tb = document.getElementById("results");
    var tr = document.getElementById("result" + id);
    tb.removeChild(tr);
}

function addMethodParam() {
    methodParamId++;
    var newTr = methodParams.insertRow();
    newTr.id = 'methodParam' + methodParamId + '_new';
    var newTd0 = newTr.insertCell();
    var newTd1 = newTr.insertCell();
    var newTd2 = newTr.insertCell();
    var newTd3 = newTr.insertCell();
    var newTd4 = newTr.insertCell();
    newTd0.innerHTML = "<td><input type='hidden' name='methodParamId' value='-1'/></td>";
    newTd1.innerHTML = "<td><input name='methodParamName'/></td>";
    newTd2.innerHTML = "<td><select name='methodParamType'>" +
        "<option value=''>-请选择-</option>" +
        "<option value='String'>String</option>" +
        "<option value='Boolean'>Boolean</option>" +
        "<option value='Double'>Double</option>" +
        "<option value='Float'>Float</option>" +
        "<option value='Long'>Long</option>" +
        "<option value='Integer'>Integer</option>" +
        "</select></td>";
    newTd3.innerHTML = "<td><input name='methodParamValue' /></td>";
    newTd4.innerHTML = "<td><input type='button' onclick=\"removeMethodParam('" + methodParamId + "_new')\" value='删除该参数'/></td>"
}

function removeMethodParam(id) {
    var tb = document.getElementById("methodParams");
    var tr = document.getElementById("methodParam" + id);
    tb.removeChild(tr);
}

function addInputParam() {
    //新增inputParam部分
    inputParamId++;
    var newTr = inputParams.insertRow();
    newTr.id = 'inputParam' + inputParamId + "_new";
    var newTd0 = newTr.insertCell();
    var newTd1 = newTr.insertCell();
    var newTd2 = newTr.insertCell();
    var newTd3 = newTr.insertCell();
    var newTd4 = newTr.insertCell();
    var newTd5 = newTr.insertCell();
    var newTd6 = newTr.insertCell();
    newTd0.innerHTML = "<td><input type='hidden' name='inputParamId' value='-1'/></td>";
    newTd1.innerHTML = "<td><input name='paramName'/></td>";
    newTd2.innerHTML = "<td><input name='paramDisplay'/></td>";
    newTd3.innerHTML = "<td>" +
        "<select name='paramType'>" +
        "<option value=''>-请选择-</option>" +
        "<option value='String'>String</option>" +
        "<option value='Boolean'>Boolean</option>" +
        "<option value='Double'>Double</option>" +
        "<option value='Float'>Float</option>" +
        "<option value='Long'>Long</option>" +
        "<option value='Integer'>Integer</option>" +
        "</select></td>";
    newTd4.innerHTML = "<td><select name='optional'><option value='false'>不可选</option><option value='true'>可选</option></select></td>";
    newTd5.innerHTML = "<td><input name='paramDefault' value='NULL' onfocus=\"if(this.value=='NULL'){this.value=''}\" onblur =\"if(this.value==''){this.value='NULL'}\" /></td>";
    newTd6.innerHTML = "<td><button onclick=\"removeInputParam('" + inputParamId + "_new')\" >删除该参数</button></td>";

    //新增methodParam部分
    methodParamId++;
    var newTr = methodParams.insertRow();
    newTr.id = 'methodParam' + methodParamId + '_new';
    var newTd0 = newTr.insertCell();
    var newTd1 = newTr.insertCell();
    var newTd2 = newTr.insertCell();
    var newTd3 = newTr.insertCell();
    var newTd4 = newTr.insertCell();
    newTd0.innerHTML = "<td><input type='hidden' name='methodParamId' value='-1'/></td>";
    newTd1.innerHTML = "<td><input name='methodParamName'/></td>";
    newTd2.innerHTML = "<td><select name='methodParamType'>" +
        "<option value=''>-请选择-</option>" +
        "<option value='String'>String</option>" +
        "<option value='Boolean'>Boolean</option>" +
        "<option value='Double'>Double</option>" +
        "<option value='Float'>Float</option>" +
        "<option value='Long'>Long</option>" +
        "<option value='Integer'>Integer</option>" +
        "</select></td>";
    newTd3.innerHTML = "<td><input name='methodParamValue' /></td>";
    newTd4.innerHTML = "<td><input type='button' onclick=\"removeMethodParam('" + methodParamId + "_new')\" value='删除该参数'/></td>"
}

function removeInputParam(id) {
    var tb = document.getElementById("inputParams");
    var tr = document.getElementById("inputParam" + id);
    tb.removeChild(tr);
}

function removeExistParam(paramType, inputParamId, apiId) {
    window.location.href = getRootPath() + "/" + paramType + "/delete?apiId=" + apiId + "&" + paramType + "Id=" + inputParamId;
}

function getRootPath(){
    //获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
    var curWwwPath=window.document.location.href;
    //获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
    var pathName=window.document.location.pathname;
    var pos=curWwwPath.indexOf(pathName);
    //获取主机地址，如： http://localhost:8083
    var localhostPaht=curWwwPath.substring(0,pos);
    //获取带"/"的项目名，如：/uimcardprj
    var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);
    return(localhostPaht+projectName);
}

function deleteConfirm(url) {
    var r = confirm("确认要删除吗？");
    if (r == true) {
        window.location.href = url;
    }
}

function setTime() {
    var currentTime = parseInt(new Date().getTime() / 1000);
    document.getElementById("timestamp").value = currentTime;
}

function updateSubPlat(url, id) {
    var subPlatfromId = document.getElementById("subPlatformId" + id);
    subPlatfromId.innerHTML = "<td><input name='subPlatformId' value='" + id + "' readonly='readonly'/></td>";

    var platformName = document.getElementById("platformName" + id);
    var tpn = platformName.firstChild.nodeValue;
    platformName.innerHTML = "<td><input type='text' name='platformName' value='" + tpn + "' required='required'/></td>"

    var subPlatformName = document.getElementById("subPlatformName" + id);
    var tspn = subPlatformName.firstChild.nodeValue;
    subPlatformName.innerHTML = "<td><input type='text' name='subPlatformName' value='" + tspn + "' required='required'/></td>"

    var editButton = document.getElementById("editButton" + id);
    editButton.parentNode.innerHTML = "<input type='submit' value='提交修改'/>";
}

function loadSubPlatform(platform) {
    //用于子类复现
    var temp_id = document.getElementById("subPlatformId_temp").value;

    var url = "/apimanagement/api/loadSubPlatform?platform=" + platform;
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.send();
    $.ajax({
        url: "/apimanagement/api/loadSubPlatform?platform=" + platform,
        type: "GET",
        success: function (list) {
            var select = document.getElementById("subPlatformSelect");
            if (list.length != 0) {
                select.innerHTML = "<select name=\"subPlatform\" class=\"form-control\" required='required' id=\"subPlatformSelect\"><option value=''>-请选择-</option></select>";
                for (var i = 0; i < list.length; ++i) {
                    var option = document.createElement("option");
                    option.value = list[i].subPlatformId;
                    option.text = list[i].subPlatformName;
                    if (temp_id == list[i].subPlatformId) {
                        option.selected = true;
                    }
                    select.appendChild(option);
                }
            } else {
                select.innerHTML = "<select name=\"subPlatform\" class=\"form-control\" required='required' id=\"subPlatformSelect\"><option value=''>-请选择-</option></select > ";
            }
        }
    });
}

window.onload = function () {
    if (document.getElementById("platformSelect") != null) {
        //与子分类显示有关
        var select = document.getElementById("platformSelect");
        loadSubPlatform(select.value);
    }

    if (document.getElementById("timestamp") != null) {
        //与调试有关
        setTime();
    }
}

function updateResOrOper(type, id) {
    var idBtn = document.getElementById(type + "Id" + id);
    idBtn.innerHTML = "<td><input name='" + type.toLowerCase() + "Id' value='" + id + "' readonly='readonly'/></td>";

    var nameBtn = document.getElementById(type + "Name" + id);
    var tpn = nameBtn.firstChild.nodeValue;
    nameBtn.innerHTML = "<td><input type='text' name='" + type.toLowerCase() + "Name' value='" + tpn + "' required='required'/></td>"

    var editButton = document.getElementById("editButton" + id);
    editButton.parentNode.innerHTML = "<input type='submit' value='提交修改'/>";
}

function changeCheckType() {
    var resource = document.getElementById("resource");
    var resourceParam = document.getElementById("resourceParam");
    var resourceType = document.getElementById("resourceType");
    var resourceField = document.getElementById("resourceField");
    var operationName = document.getElementById("operationName");

    var checkType = document.getElementById("checkType").value;
    if (checkType == 1 || checkType == 2 || checkType == 3) {
        resource.selectedIndex = 0;
        resource.setAttribute("disabled", "disabled");
        resourceParam.value = "";
        resourceParam.setAttribute("disabled", "disabled");
        resourceType.selectedIndex = 0;
        resourceType.setAttribute("disabled", "disabled");
        resourceField.value = "";
        resourceField.setAttribute("disabled", "disabled");
        operationName.selectedIndex = 0;
        operationName.setAttribute("disabled", "disabled");
    } else {
        resource.removeAttribute("disabled");
        resourceParam.removeAttribute("disabled");
        resourceType.removeAttribute("disabled");
        resourceField.removeAttribute("disabled");
        operationName.removeAttribute("disabled");
    }

}
