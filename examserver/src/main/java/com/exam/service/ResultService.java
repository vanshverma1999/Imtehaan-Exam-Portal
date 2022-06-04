package com.exam.service;

import java.util.List;

import com.exam.model.User;
import com.exam.model.Exams.Quiz;
import com.exam.model.Exams.Result;

public interface ResultService {

    public Result addResult(Result result);
    public List<Result> getAllResult();
    public List<Result> getResultOfQuiz(Quiz quiz);
    public List<Result> getResultOfUser(User user);
    public List<Result> getResultOfUserAndQuiz(Quiz quiz,User user);

}