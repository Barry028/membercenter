var resumeDataTrans = (function(window, jQuery) {
    if (!window.jQuery) { throw new Error("resumeElm requires jQuery") }

    return {
    	// > resumeDataTrans.EduTimeline(data, pos)
    	EduTimeline: function (data, pos) {

    		if (pos == "level") {
    		    var level = data[0]['education_level']['level'];
    		    switch (level){
    		        case "1":
    		            return "國小/國中";
    		            break;
    		        case "9":
    		            return "高中";
    		            break;
    		        case "2":
    		            return "高職";
    		            break;
    		        case "3":
    		            return "專科";
    		            break;
    		        case "4":
    		            return "大學";
    		            break;
    		        case "5":
    		            return "碩士";
    		            break;
    		        case "6":
    		            return "博士";
    		            break;
    		        default:
    		            break;
    		    }
    		}
    		if (pos == "start") {
    		    return data[0]['education_start']['year']+" / "+data[0]['education_start']['month'];
    		}
    		if (pos == "end") {
    		    return data[0]['education_end']['year']+" / "+data[0]['education_end']['month'];
    		}
    		if (pos == "state") {
    		    var state = data[0]['education_level']['state'];
    		    switch (state) {
    		        case "2":
    		            return "畢業";
    		            break;
    		        case "1":
    		            return "肄業";
    		            break;
    		        case "0":
    		            return "在學";
    		            break;
    		        default:
    		            break;
    		    }
    		}
    		if (pos == "area") {
    		    var area = data[0]['school_area']['area'];
    		    if (area == "0") {
    		        return "台灣";
    		    }
    		    else if (area == "1") {
    		        return data[0]['school_area']['country'];
    		    }
    		}
    		if (pos == "system") {
    		    var sys = data[0]["school_name"]["system"];
    		    if (sys == "2") {
    		        return "夜間部";
    		    }
    		    else if (sys == "4") {
    		        return "在職專班";
    		    }
    		}

    	},

        Condition: function (data, pos) {
            if (pos == "role") {
                var role = data[0]["job_role"]["role"];
                console.trace(role);
                switch (role) {
                    case "1":
                        return "全職";
                        break;
                    case "2":
                        return "兼職";
                        break;
                    case "4":
                        return "工讀";
                        break;
                    case "16":
                        return "中高階";
                        break;
                    case "32":
                        return "獵頭推薦(中高階)";
                        break;
                    default:
                        break;
                }
            }
        }
    }
}(window, jQuery));