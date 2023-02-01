import express from 'express';
import morgan from 'morgan';

const app = express();

//미들웨어 설정
app.use(express.json()); //서버요청 json파일로 읽음
app.use(morgan('dev')); //로그관리 개발타입

app.get('/', (_, res) => res.send('running')); //요청을 받으면 응답으로 "running"을 보내줌

let port = 4000;
app.listen(port, async () => {
  console.log(`http://localhost:${port}`);
}); //app의 해당포트로 접속하면 해당코드를 실행
