'use strict';

module.exports.hello = async (event, context,callback) => {

	if(event.queryStringParameters && event.queryStringParameters.hello){
		return callback(null, {
			statusCode: 200,
			body: JSON.stringify({
	  		message:'Hello ' + event.queryStringParameters.hello + ' , nice to meet you!'
	  
			}),
		})
	}
	const response =  {
	statusCode: 200,
	body: JSON.stringify({
	  message: 'Go Serverless v1.0! Your function executed successfully!',
	  input: event,
	}),
	};

	callback(null,response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
