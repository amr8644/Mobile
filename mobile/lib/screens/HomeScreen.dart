// ignore_for_file: non_constant_identifier_names
import 'package:flut/screens/pages/chat_page.dart';
import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      bottomNavigationBar: BottomNavigationBar(
        selectedItemColor: Colors.black,
        unselectedItemColor: Colors.grey.shade500,
        selectedLabelStyle: const TextStyle(fontWeight: FontWeight.w600),
        type: BottomNavigationBarType.fixed,
        // ignore: prefer_const_literals_to_create_immutables
        items: [
          const BottomNavigationBarItem(
              icon: Icon(Icons.message), label: "Chats"),
          const BottomNavigationBarItem(
              icon: Icon(Icons.group), label: "Channels"),
          const BottomNavigationBarItem(
              icon: Icon(Icons.account_circle), label: "profile")
        ],
      ),
      body: const ChatPage(),
    );
  }
}
