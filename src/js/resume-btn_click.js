function btnClickAct(block, blockId, act){
    var $block = block;
    // --------------------------------------------------------------------------------------------------------------
    // > 聯絡方式 及 身分資料
    if (blockId == "Profile") {
        if (act == "save") {

        }
        else if (act == "cancel"){
            // TODO:Profile cancel
        }
        else if (act == "editsave") {

        }
    }

    // --------------------------------------------------------------------------------------------------------------
    // > 駕照車輛
    if (blockId == "DriversLicense") {
        if (act == "save") {
            // 取值: 駕照、車輛
            var lisenceArr = $("input[name='lisence']:checked").map(function() { return $(this).val(); }).get().join(', ').split(", ");
            var carArr = $("input[name='car']:checked").map(function() { return $(this).val(); }).get().join(', ').split(", ");

            if (lisenceArr[0] == "" && carArr[0] == "" ) {
                ToastError("請選擇您擁有的駕照或車輛!", 2000);
                return false;
            } else {
                ToastSuccess('更新成功!', 2000 );
            }

            // 將DATA傳到API
            $.ajax({
                // url: '/path/to/file',
                // type: 'default GET (Other values: POST)',
                // dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
                data: {lisence: lisenceArr, car: carArr},
            })
            .done(function(res) {
                console.log("DriversLicense save success");
                $block.append($('<input/>', {type:"hidden", class:"temp_data", "data-def":"DriversLicense", value:"{ \"lisence\":"+lisenceArr+", \"car\":"+carArr+" }"}));
                resumeUI.DriversLicenseSave($block, lisenceArr, carArr);  //  resume-edit.js
            })
            .fail(function(err) {
                console.log("DriversLicense save error");
            });

        }
        else if (act == "cancel"){

        }
        else if (act == "editsave") {
            block.find(".resume_block-complate").hide();
            block.find("resume_block-edit").show();
        }
    }

    // --------------------------------------------------------------------------------------------------------------
    // > 學歷資料
    else if (blockId == "AcademicInfo") {
        if (act == "save") {
            var tempData = [];
            var eduObj = {
                "education_level":{"level": $("#education").val(), "state": $("input[name=eduLevel]:checked").val()},
                "education_start":{"year": $("#eduStartYear").val(), "month":$("#eduStartMonth").val()},
                "education_end":{"year": $("#eduEndYear").val(), "month":$("#eduEndMonth").val()},
                "school_area":{"area": $("input[name=educationDistrict]:checked").val(), "country": $("#educationCountry").val()},
                "school_name": {"name": $("#schoolName").val(), "system": $("input[name=eduSystem]:checked").val()},
                "major":[
                    {"des": $("#majorDes1").val(), "cht": $("#majorCht1").val()},
                    {"des": $("#majorDes2").val(), "cht": $("#majorCht2").val()}
                ],
                "school_experience": ""
            };

            tempData.push(eduObj);
            // console.log(tempData);

            // 將 DATA 傳到 API
            $.ajax({
                // url: '/path/to/file',
                // type: 'default GET (Other values: POST)',
                // dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
                data: {data: tempData},
            })
            .done(function(res) {
                var tempDataStr = JSON.stringify(tempData);
                console.log("AcademicInfo save success");

                $block.append($('<input/>', {type:"hidden", class:"temp_data", "data-def":"AcademicInfo", value: tempDataStr}));
                resumeUI.AcademicInfoSave($block, tempDataStr);  //  resume-edit.js

                // TODO: number
                var num = $block.find('.resume_block-edit').attr('data-number');
                $block.find(".step-line").append($('<input/>', {type:"hidden", class:"temp_data", "data-def":"AcademicInfo", value: tempDataStr}));
            })
            .fail(function(err) {
                console.log("AcademicInfo save error");
            });
        }
        else if (act == "cancel"){
            // TODO:AcademicInfo cancel
        }
    }

    // --------------------------------------------------------------------------------------------------------------
    // > 應徵條件
    else if (blockId == "Condition") {
        if (act == "save") {
            var isDispatch = $("input#dispatch").is(":checked") ? 1 : 0;
            var isAny = $("input#industry").is(":checked") ? 1 : 0;
            if ($("input[name='workDate']").val() === 1) {
                var workdate = $("#workDate1Select").val();
            }
            else if ($("input[name='workDate']").val() === 2) {
                var workdate = $("#workDate2Year").val() + "-" + $("#workDate2Month").val() + "-" + $("#workDate2Day").val();
            }
            console.log($("input[name='workDate']").val());
            var tempData = [];
            var condObj = {
                "job_role": {"role": $("input[name='role']:checked").val(), "isDispatch": isDispatch},
                "job_name": $("#jobNameInput").val(),
                "job_category": $("#jobCategorySelect").val(),
                "industry_category": {"name": $("#industryCategorySelect").val(), "isAny": isAny},
                "salary_type": {"type": $("input[name='salaryType']:checked").val(), "min": $("#salary_min").val(), "max": $("#salary_max").val()},
                "working_place": $("#workingPlaceSelect").val(),
                "work_time": $("input[name='worktime']:checked").map(function() { return $(this).val(); }).get().join(', ').split(", "),
                "vacation": $("input[name='vacation']:checked").map(function() { return $(this).val(); }).get().join(', ').split(", "),
                "work_date": workdate,
                "remark": $("#conditionRemark").val()
            }

            tempData.push(condObj);

            console.log(condObj);

            // 將DATA傳到API
            $.ajax({
                // url: '/path/to/file',
                // type: 'default GET (Other values: POST)',
                // dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
                data: {data: tempData},
            })
            .done(function(res) {
                var tempDataStr = JSON.stringify(tempData);
                console.log("Condition save success");
                resumeUI.ConditionSave($block, tempDataStr);  //  resume-edit.js
            })
            .fail(function(err) {
                console.log("Condition save error");
            });
        }
    }

    // --------------------------------------------------------------------------------------------------------------
    // > 工作總年資 ----- *** 內容代入沒有做 ***
    else if (blockId == "JobTenure") {
        if (act == "save") {

            var tempData = [];

            tempData.push(condObj);

            console.log(condObj);

            // 將DATA傳到API
            $.ajax({
                // url: '/path/to/file',
                // type: 'default GET (Other values: POST)',
                // dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
                data: {data: tempData},
            })
            .done(function(res) {
                var tempDataStr = JSON.stringify(tempData);
                console.log("JobTenure save success");
                resumeUI.JobTenureSave($block, tempDataStr);  //  resume-edit.js
            })
            .fail(function(err) {
                console.log("JobTenure save error");
            });
        }
    }
    // --------------------------------------------------------------------------------------------------------------
    // > 工作經歷 ----- *** 內容代入沒有做 ***
    else if (blockId == "WorkExperience") {
        if (act == "save") {

            var tempData = [];

            tempData.push(condObj);

            console.log(condObj);

            // 將DATA傳到API
            $.ajax({
                // url: '/path/to/file',
                // type: 'default GET (Other values: POST)',
                // dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
                data: {data: tempData},
            })
            .done(function(res) {
                var tempDataStr = JSON.stringify(tempData);
                console.log("WorkExperience save success");
                resumeUI.WorkExperienceSave($block, tempDataStr);  //  resume-edit.js
            })
            .fail(function(err) {
                console.log("WorkExperience save error");
            });
        }
    }

    // --------------------------------------------------------------------------------------------------------------
    // > 語言能力 ----- *** 內容代入沒有做 ***
    else if (blockId == "LanguageSkills") {
        if (act == "save") {

            var tempData = [];

            tempData.push(condObj);

            console.log(condObj);
            // 將DATA傳到API
            $.ajax({
                // url: '/path/to/file',
                // type: 'default GET (Other values: POST)',
                // dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
                data: {data: tempData},
            })
            .done(function(res) {
                var tempDataStr = JSON.stringify(tempData);
                console.log("LanguageSkills save success");
                resumeUI.LanguageSkillsSave($block, tempDataStr);  //  resume-edit.js
            })
            .fail(function(err) {
                console.log("LanguageSkills save error");
            });
        }
    }

    // --------------------------------------------------------------------------------------------------------------
    // > 技能證照 ----- *** 內容代入沒有做 ***
    else if (blockId == "SkillCertificate") {
        if (act == "save") {

            var tempData = [];

            tempData.push(condObj);

            console.log(condObj);
            // 將DATA傳到API
            $.ajax({
                // url: '/path/to/file',
                // type: 'default GET (Other values: POST)',
                // dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
                data: {data: tempData},
            })
            .done(function(res) {
                var tempDataStr = JSON.stringify(tempData);
                console.log("SkillCertificate save success");
                resumeUI.SkillCertificateSave($block, tempDataStr);  //  resume-edit.js
            })
            .fail(function(err) {
                console.log("SkillCertificate save error");
            });
        }
    }

    // --------------------------------------------------------------------------------------------------------------
    // > 我的自傳 ----- *** 內容代入沒有做 ***
    else if (blockId == "Autobiography") {
        if (act == "save") {

            var tempData = [];

            tempData.push(condObj);

            console.log(condObj);
            // 將DATA傳到API
            $.ajax({
                // url: '/path/to/file',
                // type: 'default GET (Other values: POST)',
                // dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
                data: {data: tempData},
            })
            .done(function(res) {
                var tempDataStr = JSON.stringify(tempData);
                console.log("Autobiography save success");
                resumeUI.AutobiographySave($block, tempDataStr);  //  resume-edit.js
            })
            .fail(function(err) {
                console.log("Autobiography save error");
            });
        }
    }
        // --------------------------------------------------------------------------------------------------------------
    // > 我的自傳 ----- *** 內容代入沒有做 ***
    else if (blockId == "Reference") {
        if (act == "save") {

            var tempData = [];

            tempData.push(condObj);

            console.log(condObj);
            // 將DATA傳到API
            $.ajax({
                // url: '/path/to/file',
                // type: 'default GET (Other values: POST)',
                // dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
                data: {data: tempData},
            })
            .done(function(res) {
                var tempDataStr = JSON.stringify(tempData);
                console.log("Reference save success");
                resumeUI.ReferenceSave($block, tempDataStr);  //  resume-edit.js
            })
            .fail(function(err) {
                console.log("Reference save error");
            });
        }
    }
}

