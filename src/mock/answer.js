
  export default [
    {
      url: '/app/answer',
      method: 'post',
      response: () => {
        return {
          "status": "SUCCESS",
          "code": 200,
          "message": "Answer successfully saved",
        }
      },
    }
  ]
