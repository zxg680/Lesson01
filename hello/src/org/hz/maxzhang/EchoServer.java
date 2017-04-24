package org.hz.maxzhang;

import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Scanner;

/**
 * Created by Administrator on 2017/4/24.
 */
public class EchoServer {
    public static void main(String[] args){
        try{
            ServerSocket s =new ServerSocket(8189);
            Socket incoming = s.accept();
            try {
                InputStream inStream = incoming.getInputStream();
                OutputStream outStream = incoming.getOutputStream();
                Scanner in = new Scanner(inStream);
                PrintWriter out = new PrintWriter(outStream, true);
                out.println("hello! Enter bye to exit");
                boolean done = false;
                while (!done && in.hasNextLine()) {
                    String line = in.nextLine();
                    out.println("Echo: " + line);
                    if (line.trim().equals("bye")) {
                        done = true;
                    }
                }
            }finally{
                incoming.close();
            }
        }catch(Exception ee){

            ee.printStackTrace();
        }
    }
}
























