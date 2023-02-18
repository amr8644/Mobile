import 'package:flut/components/chat_detail_app_bar.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';

class ChatDetailPage extends StatelessWidget {
  const ChatDetailPage({super.key});

  get itemCount => null;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const PreferredSize(
        preferredSize: Size.fromHeight(100),
        child: ChatDetailPageAppBar(),
      ),
      body: Stack(
        children: <Widget>[
          ListView.builder(
            itemCount: 6,
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            itemBuilder: (context, index) {
              return;
            },
          ),
          Align(
            alignment: Alignment.bottomLeft,
            child: Container(
              padding: const EdgeInsets.only(left: 16, bottom: 10),
              height: 80,
              width: double.infinity,
              child: Row(
                children: [
                  Container(
                    height: 40,
                    width: 40,
                    decoration: BoxDecoration(
                        color: Colors.blueGrey,
                        borderRadius: BorderRadius.circular(30)),
                    child: const Icon(
                      Icons.add,
                      color: Colors.white,
                      size: 21,
                    ),
                  ),
                  const SizedBox(
                    width: 16,
                  ),
                  Expanded(
                    child: TextField(
                      decoration: InputDecoration(
                          hintText: "Type message....",
                          border: InputBorder.none,
                          hintStyle: TextStyle(color: Colors.grey.shade500)),
                    ),
                  )
                ],
              ),
            ),
          ),
          Align(
            alignment: Alignment.bottomRight,
            child: Container(
              padding: const EdgeInsets.only(right: 30, bottom: 20),
              child: FloatingActionButton(
                onPressed: () {},
                backgroundColor: Colors.black,
                elevation: 0,
                child: const Icon(
                  Icons.send,
                  color: Colors.white,
                  size: 20,
                ),
              ),
            ),
          )
        ],
      ),
    );
  }
}
