// ignore_for_file: prefer_const_constructors

import 'package:flut/components/chat_component.dart';
import 'package:flut/models/chat_users.dart';
import 'package:flutter/material.dart';

class ChatPage extends StatefulWidget {
  const ChatPage({super.key});

  @override
  State<ChatPage> createState() => _ChatPageState();
}

class _ChatPageState extends State<ChatPage> {
  List<ChatUsers> chatUsers = {
    ChatUsers(
        text: "Amr",
        secondanry: "Hell World",
        image: "images/pexels-mohamed-abdelghaffar-771742.jpg",
        time: "Feb20"),
    ChatUsers(
        text: "Amr",
        secondanry: "Hell World",
        image: "/images/pexels-cottonbro-studio-4067753.jpg",
        time: "Feb20"),
    ChatUsers(
        text: "Amr",
        secondanry: "Hell World",
        image: "images/pexels-photo-1559486.jpeg",
        time: "Feb20"),
    ChatUsers(
        text: "Amr",
        secondanry: "Hell World",
        image: "images/pexels-pixabay-220453.jpg",
        time: "Feb20"),
  } as List<ChatUsers>;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        physics: BouncingScrollPhysics(),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            SafeArea(
                child: Padding(
                    padding: EdgeInsets.only(left: 16, right: 16, top: 10),
                    child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: <Widget>[
                          Text("Chats",
                              style: TextStyle(
                                  fontSize: 30, fontWeight: FontWeight.w600)),
                          Container(
                            padding: EdgeInsets.only(
                                left: 8, right: 8, top: 2, bottom: 2),
                            height: 30,
                            decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(30),
                                color: Colors.black),
                            child: Row(
                              children: const [
                                Icon(
                                  Icons.add,
                                  color: Colors.white,
                                  size: 20,
                                ),
                                SizedBox(
                                  width: 2,
                                ),
                                Text(
                                  "New",
                                  style: TextStyle(
                                      fontSize: 14,
                                      fontWeight: FontWeight.w600,
                                      color: Colors.white),
                                )
                              ],
                            ),
                          )
                        ]))),
            Padding(
              padding: EdgeInsets.all(16),
              child: TextField(
                decoration: InputDecoration(
                    hintText: "Search...",
                    hintStyle: TextStyle(color: Colors.grey.shade400),
                    prefixIcon: Icon(
                      Icons.search,
                      color: Colors.grey.shade500,
                    ),
                    filled: true,
                    fillColor: Colors.grey.shade100,
                    focusedBorder: OutlineInputBorder(
                        borderSide:
                            BorderSide(color: Colors.grey.shade100, width: 1.5),
                        borderRadius: BorderRadius.circular(10)),
                    contentPadding: EdgeInsets.all(8),
                    enabledBorder: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(30),
                        borderSide: BorderSide(color: Colors.grey.shade100))),
              ),
            ),
            ListView.builder(
              itemCount: chatUsers.length,
              shrinkWrap: true,
              physics: NeverScrollableScrollPhysics(),
              itemBuilder: (context, index) {
                return ChatListComponent(
                    text: chatUsers[index].text,
                    image: chatUsers[index].image,
                    secondanry: chatUsers[index].secondanry,
                    time: chatUsers[index].time);
              },
            )
          ],
        ),
      ),
    );
  }
}
