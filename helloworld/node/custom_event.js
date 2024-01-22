// events 모듈 생성
const EventEmitter = require('events');

// 생성된 이벤트 모듈을 사용하기 위한 초기화
const custom_object = new EventEmitter();

// on 함수를 재정의 하여 call 이벤트 처리
custom_object.on('call', () => {
    console.log('CALL!! EVENTS!!!');
})

// call 이벤트 강제 발생
custom_object.emit('call');