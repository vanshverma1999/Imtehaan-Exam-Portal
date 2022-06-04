package com.exam.model.Exams;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
public class Quiz {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long qid;

    private String title;
    private String description;
    private String maxMarks;
    private String numberOfQuestions;
    private boolean active = false;

    @ManyToOne(fetch = FetchType.EAGER)
    private Category category;

    @OneToMany(mappedBy = "quiz",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Question> questions = new HashSet<>();

    @OneToMany(mappedBy = "quiz",cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Result> results=new ArrayList<>();

    public List<Result> getResults() {
        return results;
    }

    public void setResults(List<Result> results) {
        this.results = results;
    }


    public Quiz() {
    }

    public Quiz(Long qid, String title, String description, String maxMarks, String numberOfQuestions, boolean active) {
        this.qid = qid;
        this.title = title;
        this.description = description;
        this.maxMarks = maxMarks;
        this.numberOfQuestions = numberOfQuestions;
        this.active = active;
    }

    public Long getQid() {
        return qid;
    }

    public void setQid(Long qid) {
        this.qid = qid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getMaxMarks() {
        return maxMarks;
    }

    public void setMaxMarks(String maxMarks) {
        this.maxMarks = maxMarks;
    }

    public String getNumberOfQuestions() {
        return numberOfQuestions;
    }

    public void setNumberOfQuestions(String numberOfQuestions) {
        this.numberOfQuestions = numberOfQuestions;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }



    public Set<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(Set<Question> questions) {
        this.questions = questions;
    }
}
