import 'package:flutter/material.dart';

// ignore: must_be_immutable
class ChatListComponent extends StatefulWidget {
  String text;
  String secondanry;
  String image;
  String time;
  ChatListComponent({
    super.key,
    required this.text,
    required this.image,
    required this.secondanry,
    required this.time,
  });

  @override
  State<ChatListComponent> createState() => _ChatListComponentState();
}

class _ChatListComponentState extends State<ChatListComponent> {
  @override
  Widget build(BuildContext context) {
    return Container(
        padding:
            const EdgeInsets.only(top: 10, bottom: 10, left: 16, right: 16),
        child: Row(
          children: <Widget>[
            Expanded(
              child: Row(
                children: <Widget>[
                  CircleAvatar(
                    backgroundImage: AssetImage(widget.image),
                    maxRadius: 30,
                  ),
                  const SizedBox(
                    width: 16,
                  ),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      Text(widget.text),
                      const SizedBox(
                        height: 6,
                      ),
                      Text(widget.secondanry,
                          style: TextStyle(
                              fontSize: 14, color: Colors.grey.shade500))
                    ],
                  ),
                ],
              ),
            ),
            Text(
              widget.time,
              style: TextStyle(fontSize: 12, color: Colors.grey.shade500),
            ),
          ],
        ));
  }
}
