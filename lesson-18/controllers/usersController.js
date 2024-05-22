// controllers/usersController.js
"use strict";

/**
 * Listing 18.9 (p. 268-269)
 * Listing 18.11 (p. 271)
 * userController.js에서 인덱스 액션 생성과 index 액션의 재방문
 */
const User = require("../models/User"); // 사용자 모델 요청

module.exports = {
  /*
   * @TODO: index과 indexView 액션을 객체 리터럴로 묶어 익스포트
   */
  index: (req, res, next) => { // DB 액션
    User.find()
      .then(users => {
        res.locals.users = users;
        next();
      })
      .catch(error => {
        console.log(`Error getting users: ${error.message}`);
        next(error);
      })
  },
  indexView: (req, res) => { // 페이지 렌더링
    res.render("users/index");
  }
};

/**
 * 노트: 구독자 컨트롤러에서 index 액션이 getAllSubscribers를 대체한다. main.js에서 액션 관련
 * 라우트 index를 가리키도록 수정하고 subscribers.ejs를 index.ejs로 변경된 점을 기억하자. 이
 * 뷰는 views 폴더 아래 subscribers 폴더에 있어야 한다.
 */
