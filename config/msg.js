const authMsg = {
    err : {
        result : false,
        msg : "오류 발생"
    },
    success : {
        result : true,
        msg : "인증성공"
    },
    fail : {
        result : false,
        msg : "인증실패"
    }
};

const registerMsg = {
    err : {
        result : false,
        msg : "오류 발생"
    },
    alreadyExistId : {
        result : false,
        msg : "아이디가 이미 존재합니다."
    },
    alreadyExistEmail : {
        result : false,
        msg : "해당 이메일로 가입한 아이디가 존재합니다.."
    },
    success : {
        result : true,
        msg : "회원가입 성공"
    }
};
const loginMsg = {
    err : {
        result : false,
        msg : "로그인 과정에서 오류 발생"
    },
    idNotFound : {
        result : false,
        msg : "해당 id 없음"
    },
    passwordIncollect : {
        result : false,
        msg : "비밀번호가 틀립니다."
    },
    success : {
        result : true,
        msg : "로그인 성공"
    }
};

module.exports = {loginMsg, registerMsg, authMsg};