package org.hz.maxzhang;

import java.io.IOException;
import java.nio.channels.Channel;
import java.nio.channels.SelectionKey;
import java.nio.channels.Selector;
import java.nio.channels.ServerSocketChannel;
import java.util.Iterator;
import java.util.Set;

/**
 * @author Xiaogang.Zhang
 * @version V1.0
 * @PROJECT_NAME hello
 * @Package org.hz.maxzhang
 * @Description: java NIO selector使用方法
 * @date 2017/4/25 10:32
 */
public class TestSelector {

    private void start() throws IOException {
        Selector selector= Selector.open();
        ServerSocketChannel channel = ServerSocketChannel.open();
        channel.configureBlocking(false);
        SelectionKey key =channel.register(selector, SelectionKey.OP_ACCEPT);
        while(true){
            int readyChannels = selector.select();
            if(readyChannels == 0){
                continue;
            }
            Set selectedKeys = selector.selectedKeys();
            Iterator keyIterator = selectedKeys.iterator();
            while(keyIterator.hasNext()){
                SelectionKey skey = (SelectionKey)keyIterator.next();
                if(skey.isAcceptable()){
                    // a connection was accepted by a ServerSocketChannel
                }else if(skey.isConnectable()){
                    // a connection was established with a remote server
                }else if(skey.isReadable()){
                    // achannel is ready for reading
                }else if(skey.isWritable()){
                    // a channel is ready for writing
                }
                keyIterator.remove();
            }
        }

    }

}
