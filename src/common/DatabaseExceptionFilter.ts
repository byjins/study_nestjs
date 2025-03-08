import { Catch, ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { QueryFailedError } from 'typeorm';
import { Response } from 'express';

@Catch(QueryFailedError) // TypeORM 쿼리 실패 예외를 캐치
export class DatabaseExceptionFilter implements ExceptionFilter {
  catch(exception: QueryFailedError, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();

    // 예외 발생 시, 커스텀 메시지와 함께 응답
    response.status(500).json({
      statusCode: 500,
      message: 'Database error occurred', // 구체적인 메시지 또는 에러 코드 추가 가능
      error: exception.message, // 예외 메시지 제공
      stack: exception.stack, // 스택 트레이스 포함 (필요시)
    });
  }
}
