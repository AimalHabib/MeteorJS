import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import './main.html';
import './MainPages/Home.html';
import './MainPages/About.html';
import './MainPages/Contact.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

FlowRouter.route('/',{
  name:'home',
  action(){
    BlazeLayout.render('layout1', { top: "header",  main: "HomeTemplate", bottom: "footer" });
  }
});
FlowRouter.route('/About',{
  name:'about',
  action(){
    BlazeLayout.render('layout1', { top: "header",  main: "AboutTemplate", bottom: "footer" });
  }
});
FlowRouter.route('/Contact',{
  name:'contact',
  action(){
    BlazeLayout.render('layout1', { top: "header",  main: "ContactTemplate", bottom: "footer" });
  }
});

FlowRouter.route('/layout1',{
  name:'layout1',
  action(){
    BlazeLayout.render('layout1', { top: "header",  main: "postList",  bottom: "footer"});
  }
});