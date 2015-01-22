/**
 * Created by Luke on 2015/1/21.
 */


/*
多重链表表示

若以树的多重链表表示键树，则树的每个结点中应含有d个指针域，此时的键树又称Trie树。
（Trie是从检索retrieve中取中间四个字符的，读音同try）。
若从键树中某个结点到叶子结点的路径上每个结点都只有一个孩子，则可将该路径上所有结点压缩成一个“叶子结点”，且在该叶子结点中存储关键字及指向记录的指针等信息。
在Trie树中有两种结点：
分支结点：含有d个指针域和一个指示该结点中非空指针域的个数的整数域。在分支结点中不设数据域，每个分支结点所表示的字符均有其父结点中指向该结点的指针所在位置决定。
叶子结点：含有关键字域和指向记录的指针域。


在Trie树上进行查找

从根结点出发，沿和给定值相应的指针逐层向下，直至叶子结点，若叶子结点中的关键字和给定值相等，则查找成功，若分支结点中和给定值相应的指针为空，或叶子结点中的关键字和给定值不相等，则查找不成功。
 */

/*
http://www.docin.com/p-428781429.html
http://www.cnblogs.com/dolphin0520/archive/2011/10/11/2207886.html
http://www.cnblogs.com/mengdd/archive/2012/11/15/2772418.html
 */