"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/var bI=Math.imul;var bJ=Math.fround;var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};function bc(){var g=null,e=null,a=null,c=null;a="inputText";g=document.getElementById(a);a="result";e=document.getElementById(a);a="input";c=[{a0:null,a1:null}];c[0].a0=g;c[0].a1=e;c=bZ(bf,c[0]);g.addEventListener(a,c);}function bf(l){var m=0,j=null,c=null,d=0,a=null,b=0,k=0,g=0,e=0,h=0;j=l.a0.value;c="\r\n|\r|\n";a=new RegExp(c);k=j.split(a).length;j={i0:0,i1:0,a2:nullArray};j.i0=0;j.i1=0;j.a2=nullArray;g=0;c=nullArray;while(1){e=j.i1|0;while(1){h=aZ(c,g,nullObj,k)|0;if((h|0)>-1){if(h>>>0<=g>>>0){j.i1=e;e=j.i1|0;if(h>>>0<e>>>0){c[h]=0;j.i1=h;a=j;}else{av(j,h-e|0);c=j.a2;a=j;h=j.i1|0;}e=a.i0|0;j.i0=0;j.i1=0;j.a2=nullArray;if(e>>>0<2){e=0;}else{e=(e& -2)-1|0;}if(e-h>>>0<21){g=h+21|0;if(e>>>0<2147483623){e<<=1;e=(g>>>0<e>>>0?e|0:g|0)+16& -16;}else{e=-17;}a=new Uint8Array(e/1|0);a[0]=76;a[1]=105;a[2]=110;a[3]=101;a[4]=115;a[5]=32;a[6]=111;a[7]=102;a[8]=32;a[9]=110;a[10]=117;a[11]=109;a[12]=98;a[13]=101;a[14]=114;a[15]=32;a[16]=105;a[17]=115;a[18]=32;a[19]=58;a[20]=32;if((h|0)!==0){d=0;c=c;e=21;while(1){a[e]=c[d]|0;e=e+1|0;if(a!==a||((0+21|0)+h|0)!==(0+e|0)){d=d+1|0;c=c;continue;}break;}}a[g]=0;}else{if((h|0)!==0){a=c;j=aN;e=0;g=0;k=a===j?1:0;m=e>>>0<=g>>>0?1:0;if(g>>>0<e+h>>>0){if(k){if(m){b=21;a=aN;}else{b=0;a=aN;}}else{b=0;a=aN;}}else{b=0;a=aN;}g=h+21|0;e=0;while(1){e=e-1|0;g=g-1|0;c[g]=c[(0+h|0)+e|0]|0;if((g|0)!==21)continue;break;}}else{b=0;a=aN;}if(b<0){c[20]=a[b+20|0]|0;c[19]=a[b+19|0]|0;c[18]=a[b+18|0]|0;c[17]=a[b+17|0]|0;c[16]=a[b+16|0]|0;c[15]=a[b+15|0]|0;c[14]=a[b+14|0]|0;c[13]=a[b+13|0]|0;c[12]=a[b+12|0]|0;c[11]=a[b+11|0]|0;c[10]=a[b+10|0]|0;c[9]=a[b+9|0]|0;c[8]=a[b+8|0]|0;c[7]=a[b+7|0]|0;c[6]=a[b+6|0]|0;c[5]=a[b+5|0]|0;c[4]=a[b+4|0]|0;c[3]=a[b+3|0]|0;c[2]=a[b+2|0]|0;c[1]=a[b+1|0]|0;c[0]=a[b]|0;}else{c[0]=a[b]|0;c[1]=a[b+1|0]|0;c[2]=a[b+2|0]|0;c[3]=a[b+3|0]|0;c[4]=a[b+4|0]|0;c[5]=a[b+5|0]|0;c[6]=a[b+6|0]|0;c[7]=a[b+7|0]|0;c[8]=a[b+8|0]|0;c[9]=a[b+9|0]|0;c[10]=a[b+10|0]|0;c[11]=a[b+11|0]|0;c[12]=a[b+12|0]|0;c[13]=a[b+13|0]|0;c[14]=a[b+14|0]|0;c[15]=a[b+15|0]|0;c[16]=a[b+16|0]|0;c[17]=a[b+17|0]|0;c[18]=a[b+18|0]|0;c[19]=a[b+19|0]|0;c[20]=a[b+20|0]|0;}c[h+21|0]=0;a=c;}c=l.a1;a=Z(a,0);c.textContent=a;return;}}else{h=g<<1;}g=h+1|0;if(g>>>0<e>>>0){c[g]=0;e=g;continue;}break;}j.i1=e;av(j,g-e|0);c=j.a2;continue;}}function av(l,k){var e=0,j=0,c=null,m=0,a=0,h=null,g=0;if((k|0)!==0){a=l.i0|0;if(a>>>0<2){a=0;}else{a=(a& -2)-1|0;}e=l.i1|0;h=l.a2;j=e+k|0;if(a-e>>>0<k>>>0){if(a>>>0<2147483623){a<<=1;a=(j>>>0<a>>>0?a|0:j|0)+16& -16;}else{a=-17;}c=new Uint8Array(a/1|0);if((e|0)!==0){g=0;m=0;while(1){c[g]=h[m]|0;g=g+1|0;if(c!==c||(0+e|0)!==(0+g|0)){m=m+1|0;continue;}break;}}l.a2=c;l.i0=a|1;h=c;}a=0;while(1){h[(0+e|0)+a|0]=0;a=a+1|0;if(h!==h||((0+e|0)+k|0)!==((0+e|0)+a|0))continue;break;}l.i1=j;h[j]=0;}}function Z(a,b){var e=null,c=0,h=0,g=null;e=String();c=a[b]|0;if((c&255)===0)return String(e);h=0;while(1){g=String.fromCharCode(c<<24>>24);e=e.concat(g);h=h+1|0;c=a[b+h|0]|0;if((c&255)!==0)continue;break;}return String(e);}function aZ(bt,br,bv){var aP=null,t=null,ac=null,ai=null,bu=null,V=null,N=null,W=null,X=null,x=null,ap=-0.,bs=-0.,aO=0,I=null,J=0,c=0,h=null,i=0,e=0,a=0,j=0,g=0,M=0,l=0,k=0,D=0,m=0,L=0,v=0,s=0,r=0,o=0,E=0,w=0,C=0,p=null,q=0,n=-0.,ao=0,ab=0,K=0,O=-0.,u=-0.,H=null,ad=null,an=0;aP=[nullObj,nullObj];t=new bG();if((br|0)<0){y.i0=139;return  -1|0;}t.a0=bt;t.a0o=0;I=t.a4;I.a0=bt;c=(br|0)!==0?br-1|0:0|0;t.i2=c;I.i1=c;t.i3=-65016;aP[0]={d:arguments,o:aZ.length};h=aP[0];ac={d:new DataView(new ArrayBuffer(40)),o:0};ai=new Int32Array(4);bu={d:new DataView(new ArrayBuffer(8)),o:0};V=new Uint8Array(7);N=new Int32Array(2);W=new Int32Array(2);X=new Int32Array(2);x=new bw();aP[1]=h;h=I.a0;a:{if(t.i3<<24<0)if(h===nullArray&&0===0){h=new Uint8Array(64);t.a0=h;t.a0o=0;I.a0=h;if(h===nullArray&&0===0){y.i0=12;c=-1;break a;}I.i1=64;}x.i5=0;x.a7[0]=32;x.a8[0]=48;e=0;c=0;b:while(1){a=e;c:while(1){j=bo[0+a|0]|0;switch(j&255){case 0:case 37:g=(0+a|0)-(0+e|0)|0;d:{if((g|0)!==0){if((z(y,t,bo,0+e|0,g)|0|0)===-1)break d;c=(x.i5|0)+g|0;x.i5=c;j=bo[0+a|0]|0;}if((j&255)!==0){x.i0=0;x.i3=0;x.i1=-1;x.i2=0;I=x.a9;I[40]=0;x.i11=0;M=a+1|0;g=bo[0+M|0]|0;e:{switch(g&255){case 35:i=0;h=aa;break;case 45:i=1;h=aa;break;case 48:i=2;h=aa;break;case 43:i=3;h=aa;break;case 32:i=4;h=aa;break;default:l=0;e=0;break e;}k=0;e=0;while(1){e|=(1<<((i)-(0)|0));x.i0=e;l=k+1|0;g=bo[(0+M|0)+l|0]|0;switch(g&255){case 35:i=0;h=aa;break;case 45:i=1;h=aa;break;case 48:i=2;h=aa;break;case 43:i=3;h=aa;break;case 32:i=4;h=aa;break;default:a=M+k|0;break e;}k=l;continue;}}j=M+l|0;e:{if((e&16|0)===0)if(!(((e&8|0)===0?1:0)^1))break e;I[40]=(e&8|0)===0?32|0:43|0;g=bo[0+j|0]|0;}if((g&255)===42){g=b8(aP[1]);x.i3=g;if((g|0)<0){x.i3=-g|0;e|=2;x.i0=e;}j=a+2|0;g=bo[0+j|0]|0;}else{o=(g<<24>>24)-48|0;if(o>>>0<10){a=0;while(1){a=(bI(a,10)|0)+o|0;x.i3=a;l=l+1|0;j=M+l|0;g=bo[0+j|0]|0;o=(g<<24>>24)-48|0;if(o>>>0<10)continue;break;}}}if((g&255)===46){a=j+1|0;if((bo[0+a|0]&255)===42){g=b8(aP[1]);k=(g|0)>-1?g|0: -1|0;x.i1=k;a=j+2|0;g=bo[0+a|0]|0;}else{x.i1=0;g=bo[0+a|0]|0;l=(g<<24>>24)-48|0;if(l>>>0<10){o=0;k=0;while(1){k=(bI(k,10)|0)+l|0;x.i1=k;o=o+1|0;j=a+o|0;g=bo[0+j|0]|0;l=(g<<24>>24)-48|0;if(l>>>0<10)continue;break;}a=j;}else{k=0;}}}else{a=j;k=-1;}e:{switch(g&255){case 104:i=0;h=am;break;case 108:i=1;h=am;break;case 76:i=2;h=am;break;default:M=a;break e;}M=a+1|0;g=(i)-(0)|0;if((g|0)===1){if((bo[0+M|0]&255)===108){M=a+2|0;a=512;}else{a=128;}}else{a=64<<g;}e|=a;x.i0=e;g=bo[0+M|0]|0;}x.i6=g;switch(g&255){case 101:case 102:case 103:case 69:case 70:case 71:n=b8(aP[1]);x.d10=n;bu.d.setFloat64(bu.o,n,true);E=bu.d.getInt32(1*4+bu.o,true)|0;ao=bu.d.getInt32(bu.o,true)|0;e:if((ao|E|0)!==0){if((E|0)===-2147483648)if((ao|0)===0){E=2;break e;}if((E&2147483647)-1048576>>>0<2145386496){E=4;}else{if(E>>>0>=1048576){if((E|0)<0)if(E>>>0<2148532224){E=3;break e;}if((E|0)===2146435072)if((ao|0)===0){E=1;break e;}E=(E|0)===-1048576&&(ao|0)===0?1:0;break e;}E=3;}}else{E=2;}switch(E|0){case 1:if(n<0)I[40]=45;if(g<<24<1207959552){h=a8;}else{h=a_;}x.i4=3;x.i0=e& -5;a=0;c=0;break;case 0:if(g<<24<1207959552){h=a6;}else{h=a7;}x.i4=3;x.i0=e& -5;a=0;c=0;break;default:if((k|0)===-1){x.i1=6;E=g|32;k=6;}else{E=g|32;if((k|0)===0)if((E&255)===103){x.i1=1;k=1;E=103;}}x.i0=e|1024;ac.d.setFloat64(4*8+ac.o,n,true);ao=ac.d.getInt32(1*4+4*8+ac.o,true)|0;ap=(ao|0)<0?-n:n;ab=g<<24>>24;switch(ab|0){case 102:case 70:K=3;break;case 101:case 69:k=k+1|0;K=2;break;default:K=2;}ac.d.setFloat64(1*8+ac.o,ap,true);h=y.a9;if(h!==null){p=h.a0;if(p!==null){D=h.i1|0;p.i1=D;p.i2=1<<D;h.a0=null;}}else{h={a0:null,i1:0,a2:null,a3:null};y.a9=h;h.i1=0;h.a2=null;h.a0=null;h.a3=null;}D=ac.d.getInt32(1*4+1*8+ac.o,true)|0;if((D|0)<0){D&=2147483647;ac.d.setInt32(1*4+1*8+ac.o,D,true);}if((D&2146435072|0)===2146435072){if((ac.d.getInt32(1*8+ac.o,true)|D&1048575|0)!==0){h=ba;}else{h=bb;}a=h[3]|0;q=0+(a!==0?8|0:3|0)|0;p=h;a=9999;}else{n=+ac.d.getFloat64(1*8+ac.o,true);if(n===0){h=aK;q=1;p=aK;a=1;}else{ac.d.setFloat64(ac.o,n,true);p={a0:null,i1:0,i2:0,i3:0,i4:0,a5:nullArray};p.i1=1;p.i2=2;h=new Int32Array(2);p.a5=h;p.i4=0;p.i3=0;D=ac.d.getInt32(1*4+ac.o,true)|0;m=D&1048575;ai[1]=m;D&=2147483647;ac.d.setInt32(1*4+ac.o,D,true);D>>>=20;if((D|0)!==0){m|=1048576;ai[1]=m;}c=ac.d.getInt32(ac.o,true)|0;if((c|0)!==0){ai[0]=c;c=ax(ai,0)|0;L=ai[0]|0;if((c|0)!==0){h[0]=m<<(32-c|0)|L;m>>>=c;ai[1]=m;}else h[0]=L;h[1]=m;a=(m|0)!==0?2|0:1|0;p.i4=a;}else{m=ax(ai,1)|0;h[0]=ai[1]|0;p.i4=1;c=m+32|0;a=1;}if((D|0)!==0){D=(D-1075|0)+c|0;v=53-c|0;}else{D=aA(h[a-1|0]|0)|0;v=(a<<5)-D|0;D=c-1074|0;}m=ac.d.getInt32(1*4+1*8+ac.o,true)|0;L=m>>>20&2047;if((L|0)!==0){ac.d.setFloat64(2*8+ac.o,+ac.d.getFloat64(1*8+ac.o,true),true);ac.d.setInt32(1*4+2*8+ac.o,ac.d.getInt32(1*4+2*8+ac.o,true)&1048575|1072693248,true);w=L-1023|0;}else{L=v+D|0;if((L|0)>-1042){w=ac.d.getInt32(1*8+ac.o,true)|0;m=w>>>(L+1042|0)|m<<( -1010-L|0);}else{m=ac.d.getInt32(1*8+ac.o,true)|0;m<<=( -1042-L|0);}ac.d.setFloat64(2*8+ac.o,(+(m>>>0)),true);ac.d.setInt32(1*4+2*8+ac.o,(ac.d.getInt32(1*4+2*8+ac.o,true)|0)-32505856|0,true);w=L-1|0;}n=(+(w|0))*.301029995663981+(( +ac.d.getFloat64(2*8+ac.o,true)+ -1.5)*.289529654602168+.1760912590558);m=~~n;m=((n<0&&!(n===(+(m|0)))?1:0)<<31>>31)+m|0;if(m>>>0<23){if( +ac.d.getFloat64(1*8+ac.o,true)< +$[m]){m=m-1|0;L=0;}else{L=0;}}else{L=1;}v=v-w|0;w=(v|0)>0?v-1|0:0|0;v=(v|0)>0?0|0:1-v|0;if((m|0)>-1){w=m+w|0;C=m;s=0;}else{v=v-m|0;s=-m|0;C=0;}if((K|0)===3){r=m+k|0;l=r+1|0;a=(l|0)>1?l|0:1|0;o=k;}else{l=(k|0)>1?k|0:1|0;o=l;r=l;a=l;}h=new Uint8Array((a+1|0)/1|0);e:{f:{g:{h:{if(l>>>0<15){O=+ac.d.getFloat64(1*8+ac.o,true);ac.d.setFloat64(2*8+ac.o,O,true);if((m|0)>0){u=+$[m&15];a=m>>>4;if((a&16|0)!==0){n=O/1.0E+256;ac.d.setFloat64(1*8+ac.o,n,true);a&=15;j=3;}else{n=O;j=2;}if((a|0)!==0){c=0;while(1){if((a&1|0)!==0){bs=+aJ[c];j=j+1|0;u*=bs;}a>>=1;if((a|0)!==0){c=c+1|0;continue;}break;}}n/=u;ac.d.setFloat64(1*8+ac.o,n,true);}else if((m|0)!==0){c=-m|0;n=O* +$[c&15];ac.d.setFloat64(1*8+ac.o,n,true);c>>=4;if((c|0)!==0){j=2;a=0;while(1){if((c&1|0)!==0){n*= +aJ[a];ac.d.setFloat64(1*8+ac.o,n,true);j=j+1|0;}c>>=1;if((c|0)!==0){a=a+1|0;continue;}break;}}else{j=2;}}else{n=O;j=2;}i:{if((L|0)!==0){if((l|0)>0){if(n<1){if((r|0)<1)break i;n*=10;ac.d.setFloat64(1*8+ac.o,n,true);c=m-1|0;a=r;j=j+1|0;}else{c=m;a=l;}}else{c=m;a=l;}}else{c=m;a=l;}ac.d.setFloat64(3*8+ac.o,n*(+(j|0))+7,true);ac.d.setInt32(1*4+3*8+ac.o,(ac.d.getInt32(1*4+3*8+ac.o,true)|0)-54525952|0,true);if((a|0)!==0){u= +$[a-1|0]* +ac.d.getFloat64(3*8+ac.o,true);ac.d.setFloat64(3*8+ac.o,u,true);j=~~n;ac.d.setFloat64(1*8+ac.o,n-(+(j|0)),true);h[0]=j+48|0;if((a|0)!==1){an=0;j=2;while(1){an=an+1|0;n= +ac.d.getFloat64(1*8+ac.o,true)*10;aO=~~n;ac.d.setFloat64(1*8+ac.o,n-(+(aO|0)),true);h[an]=aO+48|0;if((j|0)!==(a|0)){j=j+1|0;continue;}break;}u=+ac.d.getFloat64(3*8+ac.o,true);}n=+ac.d.getFloat64(1*8+ac.o,true);if(n>u+.5){m=c;break f;}if(n<.5-u){while(1){K=a-1|0;if((h[K]&255)===48){a=K;continue;}break;}m=c;break e;}else{O=+ac.d.getFloat64(2*8+ac.o,true);}}else{n+= -5;ac.d.setFloat64(1*8+ac.o,n,true);u=+ac.d.getFloat64(3*8+ac.o,true);if(n>u)break g;if(n<-u)break h;}}ac.d.setFloat64(1*8+ac.o,O,true);}if((D|0)>-1)if((m|0)<15){n=+$[m];if((l|0)<1)if((o|0)<0){if((l|0)<0)break h;if( +ac.d.getFloat64(1*8+ac.o,true)<=n*5)break h;c=m;break g;}u=+ac.d.getFloat64(1*8+ac.o,true);c=~~(u/n);ac.d.setFloat64(1*8+ac.o,u-n*(+(c|0)),true);h[0]=c+48|0;u=+ac.d.getFloat64(1*8+ac.o,true);if((l|0)===1){a=1;}else{K=1;a=1;while(1){u*=10;ac.d.setFloat64(1*8+ac.o,u,true);if(u===0)break e;c=~~(u/n);ac.d.setFloat64(1*8+ac.o,u-n*(+(c|0)),true);h[a]=c+48|0;K=K+1|0;u=+ac.d.getFloat64(1*8+ac.o,true);if((K|0)!==(l|0)){a=a+1|0;continue;}break;}a=a+1|0;}u+=u;ac.d.setFloat64(1*8+ac.o,u,true);if(u>n)break f;K=u===n?1:0;if((c&1|0)===0)break e;if(K)break f;break e;}if((w|0)>0)if((v|0)>0){a=(v|0)<(w|0)?v|0:w|0;v=v-a|0;w=w-a|0;}if((s|0)>0){p=az(p,s);}H={a0:null,i1:0,i2:0,i3:0,i4:0,a5:nullArray};H.i1=1;H.i2=2;ad=new Int32Array(2);H.a5=ad;H.i3=0;ad[0]=1;H.i4=1;i:{if((C|0)>0){H=az(H,C);ad=H.a5;C=H.i4|0;}else{if((C|0)===0){C=1;break i;}C=1;}C=aA(ad[C-1|0]|0)|0;C=32-C|0;}C=C+w&31;C=(C|0)!==0?32-C|0:0|0;if(C>>>0>4){C=C-4|0;v=C+v|0;w=C+w|0;}else if((C|0)!==4){C=C+28|0;v=C+v|0;w=C+w|0;}if((v|0)>0){p=ak(p,v);}if((w|0)>0){H=ak(H,w);}if((L|0)!==0)if((af(p,H)|0|0)<0){l=r;m=m-1|0;p=ae(p,10);}if((K|0)!==2)if((l|0)<1){if((l|0)<0)break h;if((af(p,ae(H,5))|0|0)<1)break h;c=m;break g;}c=(aw(p,H)|0)+48|0;h[0]=c;if((l|0)>1){D=1;K=1;while(1){p=ae(p,10);c=(aw(p,H)|0)+48|0;h[K]=c;D=D+1|0;if((D|0)!==(l|0)){K=K+1|0;continue;}break;}a=l;}else{a=1;}K=af(ak(p,1),H)|0;i:if((K|0)<=0){if((c&1|0)!==0)if((K|0)===0)break i;while(1){K=a-1|0;if((h[K]&255)!==48)break e;a=K;continue;}}o=a-1|0;j=h[o]|0;if((j&255)===57){c=o;while(1){if(h===h&&(0+c|0)===0){h[0]=49;m=m+1|0;break e;}o=c-1|0;j=h[o]|0;if((j&255)===57){a=c;c=o;continue;}break;}a=c;}h[o]=j+1|0;break e;}m=o^ -1;a=0;break e;}h[0]=49;m=c+1|0;a=1;break e;}j=a-1|0;c=h[j]|0;if((c&255)===57){c=a;a=j;while(1){if(h===h&&(0+a|0)===0){h[0]=48;a=c;m=m+1|0;j=0;c=48;}else{j=a-1|0;c=h[j]|0;if((c&255)===57){c=a;a=j;continue;}}break;}}h[j]=c+1|0;}h[a]=0;q=0+a|0;p=h;a=m+1|0;}}e:{switch(ab|0){case 103:case 71:if((e&1|0)!==0)break;break e;default:}switch(ab|0){case 102:case 70:a=!(ap===0)&&(h[0]&255)===48?1-k|0:a|0;e=a;break;default:e=0;}if(ap===0){q=(0+k|0)+e|0;p=h;}else if(q<((0+k|0)+e|0)){while(1){p[q]=48;if(p!==h||(q+1|0)!==((0+k|0)+e|0)){q=q+1|0;p=p;continue;}break;}q=(0+k|0)+e|0;p=h;}}c=(q)-(0)|0;e:{f:{g:{if((E&255)===103){E=(a|0)>(x.i1|0)?1:0;if((a|0)>=-3)if(!(E)){g=103;break g;}g=g+254|0;}if(g<<24<1711276032){I[43]=g;j=a-1|0;k=(a|0)<1?1-a|0:j|0;I[44]=(a|0)<1?45|0:43|0;if((k|0)>9){e=0;while(1){E=e-1|0;ab=((k|0)%10|0)+48|0;V[7+E|0]=ab;K=(k|0)/10|0;if((k|0)>99){e=E;k=K;continue;}break;}k=K+48|0;V[7+(e-2|0)|0]=k;if((e|0)<2){I[45]=k;if((e|0)===1){q=46;p=I;}else{I[46]=ab;if((e|0)<0){k=0;while(1){E=k+1|0;I[47+k|0]=V[7+e|0]|0;if((e|0)<-1){e=e+1|0;k=E;continue;}break;}q=47+E|0;p=I;}else{q=47;p=I;}}}else{q=45;p=I;}}else{I[45]=48;I[46]=k+48|0;q=47;p=I;}a=(q)-(43)|0;e=a+c|0;x.i4=e;if((c|0)<=1)if((x.i0&1|0)===0)break e;x.i4=e+1|0;break e;}if((g&255)===102){if((a|0)>0){x.i4=a;k=x.i1|0;if((k|0)===0)if((x.i0&1|0)===0){g=102;break f;}x.i4=(a+1|0)+k|0;g=102;break f;}k=x.i1|0;h:{if((k|0)===0)if((x.i0&1|0)===0){k=1;break h;}k=k+2|0;}x.i4=k;g=102;break f;}}if((a|0)<(c|0))x.i4=c+((a|0)>0?1|0:2-a|0)|0;else{x.i4=a;if((x.i0&1|0)!==0)x.i4=a+1|0;}}x.i11=a;j=a;a=0;}if((ao|0)<0)I[40]=45;}e:if((aC(x,ai,2,t)|0|0)===-1){e=-1;}else{e=x.i0|0;f:if((e&1024|0)!==0){if(g<<24>1694498816){if( +x.d10===0){if((z(y,t,aK,0,1)|0|0)===-1){e=-1;break e;}if((c|0)<=(j|0))if((x.i0&1|0)===0)break f;if((z(y,t,a4,0,1)|0|0)===-1){e=-1;break e;}if((c|0)>1){e=c-1|0;g=0;while(1){if((z(y,t,x.a8,0,1)|0|0)===-1){e=-1;break e;}g=g+1|0;if((g|0)<(e|0))continue;break;}}}else if((j|0)<1){if((z(y,t,aK,0,1)|0|0)===-1){e=-1;break e;}if((c|j|0)===0)if((x.i0&1|0)===0)break f;if((z(y,t,a4,0,1)|0|0)===-1){e=-1;break e;}if((j|0)<0){e=-j|0;g=0;while(1){if((z(y,t,x.a8,0,1)|0|0)===-1){e=-1;break e;}g=g+1|0;if((g|0)<(e|0))continue;break;}}if((z(y,t,h,0,c)|0|0)===-1){e=-1;break e;}}else{g=x.i11|0;e=(c|0)>(g|0)?g|0:c|0;if((e|0)>0){if((z(y,t,h,0,e)|0|0)===-1){e=-1;break e;}g=x.i11|0;}e=(e|0)>0?e|0:0|0;if((g|0)>(e|0)){k=0;while(1){if((z(y,t,x.a8,0,1)|0|0)===-1){e=-1;break e;}g=x.i11|0;k=k+1|0;if((k|0)<(g-e|0))continue;break;}}g:{if((c|0)<=(j|0))if((x.i0&1|0)===0)break g;if((z(y,t,a4,0,1)|0|0)===-1){e=-1;break e;}}e=c-g|0;k=c-j|0;e=(k|0)<(e|0)?k|0:e|0;if((e|0)>0)if((z(y,t,h,0+g|0,e)|0|0)===-1){e=-1;break e;}e=((e|0)>0?-e|0:0|0)+k|0;if((e|0)>0){g=0;while(1){if((z(y,t,x.a8,0,1)|0|0)===-1){e=-1;break e;}g=g+1|0;if((g|0)<(e|0))continue;break;}}}}else{g=z(y,t,h,0,1)|0;g:{if((c|0)<2)if((e&1|0)===0){if((g|0)!==-1)break g;e=-1;break e;}if((g|0)===-1){e=-1;break e;}if((z(y,t,a4,0,1)|0|0)===-1){e=-1;break e;}e=c-1|0;if( +x.d10===0){if((c|0)>1){g=0;while(1){if((z(y,t,x.a8,0,1)|0|0)===-1){e=-1;break e;}g=g+1|0;if((g|0)<(e|0))continue;break;}}}else if((z(y,t,h,0+1|0,e)|0|0)===-1){e=-1;break e;}}if((z(y,t,I,43,a)|0|0)===-1){e=-1;break e;}}}else if((z(y,t,h,0,x.i4|0)|0|0)===-1){e=-1;break e;}e=x.i3|0;g=ai[2]|0;k=(e|0)>(g|0)?1:0;if((x.i0&2|0)!==0)if(k){k=0;while(1){if((z(y,t,x.a7,0,1)|0|0)===-1){e=-1;break e;}e=x.i3|0;k=k+1|0;if((k|0)<(e-g|0))continue;break;}}e=(e|0)>(g|0)?e|0:g|0;}break;default:e:{f:{g:{h:{i:{j:{switch(g<<24>>24|0){case 99:c=b8(aP[1]);I[39]=c;x.i4=1;i=39;h=I;break;case 100:case 105:if((e&512|0)!==0){h=b8(aP[1]);c=h.d[h.o]|0;a=h.d[h.o+1|0]|0;}else if(e<<24<0){c=b8(aP[1]);a=c>>31;}else{c=b8(aP[1]);if((e&64|0)!==0){c<<=16;a=c>>31;c>>=16;}else{a=c>>31;}}N[1]=a;N[0]=c;if((a|0)<0){a=(c|0)!==0?a^ -1|0:-a|0;N[1]=a;c=-c|0;N[0]=c;I[40]=45;h=a$;j=10;break f;}h=a$;j=10;break f;case 117:case 111:if((e&512|0)!==0){h=b8(aP[1]);c=h.d[h.o]|0;a=h.d[h.o+1|0]|0;}else if(e<<24<0){c=b8(aP[1]);a=0;}else{c=b8(aP[1]);c=(e&64|0)!==0?c&65535|0:c|0;a=0;}N[1]=a;N[0]=c;j=(g&255)===111?8|0:10|0;h=a$;break g;case 88:I[42]=88;h=a$;break h;case 112:e|=32;x.i0=e;break i;case 120:break i;case 110:if((e&512|0)!==0){h=b8(aP[1]);h.d[h.o+1|0]=c>>31;h.d[h.o]=c;break j;}if(e<<24<0){h=b8(aP[1]);h.d[h.o]=c;break j;}if((e&64|0)!==0){h=b8(aP[1]);h.d[h.o]=c;break j;}h=b8(aP[1]);h.d[h.o]=c;break j;case 0:break j;case 115:h=b8(aP[1]);if((k|0)!==0){e=k;g=0;while(1){if((h.d[h.o+g|0]&255)!==0){e=e-1|0;if((e|0)!==0){g=g+1|0;continue;}}else if(h.d!==nullArray||(h.o+g|0)!==0){k=(h.o+g|0)-(h.o)|0;x.i1=k;}break;}}else{k=0;}x.i4=k;i=h.o;h=h.d;break;default:I[39]=g;x.i4=1;i=39;h=I;}I[40]=0;break e;}x.i4=0;i=40;h=I;break e;}I[42]=120;h=a9;}if((e&512|0)!==0){p=b8(aP[1]);c=p.d[p.o]|0;a=p.d[p.o+1|0]|0;}else if(e<<24<0){c=b8(aP[1]);a=0;}else{a=b8(aP[1]);c=(e&64|0)!==0?a&65535|0:a|0;a=0;}N[1]=a;N[0]=c;if((e&1|0)!==0){e|=32;x.i0=e;}if((a|c|0)!==0){j=16;}else{e&= -33;x.i0=e;j=16;}}I[40]=0;}x.i2=k;if((k|0)>-1)x.i0=e& -5;if((c|k|a|0)!==0){D=((Math.imul(0,4))&4|0)===0?1:0;m=((Math.imul(0,4))&4|0)===0?1:0;L=((Math.imul(0,4))&7|0)===0?1:0;v=0;while(1){W[1]=0;W[0]=j;f:{if(j>>>0>=c>>>0)if((a|0)===0){r=j;s=0;l=0;o=1;break f;}r=j;o=1;l=0;s=0;while(1){s=r>>>31|s<<1;l=o>>>31|l<<1;r<<=1;g=r>>>0<c>>>0?1:0;k=(s|0)===(a|0)?1:0;e=s>>>0<a>>>0?1:0;o<<=1;E=(l|o|0)!==0?1:0;if((s|0)>-1){if(!(e)){if(!(g))break f;if(!(k))break f;}if(E)continue;}break;}}if((l|o|0)!==0)while(1){g=c>>>0>=r>>>0?1:0;k=(a|0)===(s|0)?1:0;f:{if(a>>>0<=s>>>0){if(!(k))break f;if(!(g))break f;}a=(a-s|0)+((c>>>0<r>>>0?1:0)<<31>>31)|0;c=c-r|0;}o=o>>>1|l<<31;r=r>>>1|s<<31;l>>>=1;if((o|l|0)!==0){s>>>=1;continue;}break;}v=v-1|0;I[40+v|0]=h[c]|0;X[1]=0;X[0]=j;w=N[1]|0;C=N[0]|0;s=j>>>0<C>>>0?1:0;f:{if((w|0)===0)if(!(s)){r=j;s=0;l=0;o=1;break f;}r=j;o=1;l=0;s=0;while(1){s=r>>>31|s<<1;l=o>>>31|l<<1;r<<=1;g=r>>>0<C>>>0?1:0;k=(s|0)===(w|0)?1:0;e=s>>>0<w>>>0?1:0;o<<=1;E=(l|o|0)!==0?1:0;if((s|0)>-1){if(!(e)){if(!(g))break f;if(!(k))break f;}if(E)continue;}break;}}if((l|o|0)!==0){c=0;a=0;while(1){g=C>>>0>=r>>>0?1:0;k=(w|0)===(s|0)?1:0;f:{if(w>>>0<=s>>>0){if(!(k))break f;if(!(g))break f;}w=(w-s|0)+((C>>>0<r>>>0?1:0)<<31>>31)|0;c|=o;a|=l;C=C-r|0;}o=o>>>1|l<<31;r=r>>>1|s<<31;l>>>=1;if((o|l|0)!==0){s>>>=1;continue;}break;}}else{a=0;c=0;}N[1]=a;N[0]=c;if((a|c|0)!==0)continue;break;}}else{v=0;}if((j|0)===8)if((x.i0&1|0)!==0)if((x.i1|0)<=(x.i4|0)){v=v-1|0;I[40+v|0]=48;}x.i4=(40)-(40+v|0)|0;i=40+v|0;h=I;}e:if((aC(x,ai,3,t)|0|0)===-1){e=-1;}else if((z(y,t,h,i,x.i4|0)|0|0)===-1){e=-1;}else{e=x.i3|0;g=ai[3]|0;k=(e|0)>(g|0)?1:0;if((x.i0&2|0)!==0)if(k){k=0;while(1){if((z(y,t,x.a7,0,1)|0|0)===-1){e=-1;break e;}e=x.i3|0;k=k+1|0;if((k|0)<(e-g|0))continue;break;}}e=(e|0)>(g|0)?e|0:g|0;}}if((e|0)!==-1){c=(x.i5|0)+e|0;x.i5=c;e=M+1|0;continue b;}}}e=t.i3|0;g=x.i5|0;c=(e&64|0)!==0? -1|0:g|0;break a;default:a=a+1|0;continue c;}break;}break;}}aP[0]=null;if((c|0)<-1)y.i0=139;if((br|0)!==0){J=t.a0o;I=t.a0;I[J]=0;return c|0;}return c|0;}function aC(j,h,i,g){var e=null,k=0,a=0,c=0;a=j.i2|0;c=j.i4|0;a=(a|0)>(c|0)?a|0:c|0;h[i]=a;e=j.a9;if((e[40]|0)!==0){a=a+1|0;h[i]=a;}c=j.i0|0;if((c&32|0)!==0){a=a+2|0;h[i]=a;c=j.i0|0;}if((c&6|0)===0)if((j.i3|0)>(a|0)){a=0;while(1){if((z(y,g,j.a7,0,1)|0|0)===-1)return  -1|0;a=a+1|0;if((a|0)<((j.i3|0)-(h[i]|0)|0))continue;break;}c=j.i0|0;}a=e[40]|0;if((c&32|0)!==0){e[a!==0?41|0:40|0]=48;a=a!==0?2|0:1|0;e[a+40|0]=e[42]|0;a=a+1|0;}else{a=a!==0?1:0;}if((z(y,g,e,40,a)|0|0)===-1)return  -1|0;a=(j.i3|0)-(h[i]|0)|0;a=(a|0)<0||(j.i0&6|0)!==4?0|0:a|0;c=j.i2|0;k=j.i4|0;if((c|0)>(k|0)){a=(c-k|0)+a|0;}if((a|0)<=0)return 0|0;c=0;while(1){if((z(y,g,j.a8,0,1)|0|0)===-1)return  -1|0;c=c+1|0;if((c|0)<(a|0))continue;break;}return 0|0;}function aw(p,o){var l=null,e=null,n=0,h=0,c=0,a=0,g=0,k=0,r=0,m=0,j=0;h=o.i4|0;if((p.i4|0)<(h|0))return 0|0;l=o.a5;h=h-1|0;e=p.a5;c=e[h]|0;a=(l[h]|0)+1|0;n=(c>>>0)/(a>>>0)|0;if(a>>>0>c>>>0){c=h;}else{r=0;g=0;m=0;c=0;while(1){j=c+1|0;c=l[c]|0;g=(bI(c&65535,n)|0)+g|0;c=(g>>>16)+(bI(c>>>16,n)|0)|0;a=e[m]|0;g=((a&65535)-(g&65535)|0)+r|0;a=((a>>>16)-(c&65535)|0)+(g>>16)|0;e[m]=a<<16|g&65535;if((0+j|0)<=(0+h|0)){g=c>>>16;c=j;r=a>>16;m=m+1|0;continue;}break;}if((e[h]|0)!==0){c=h;}else{a=h-1|0;if((0+a|0)>0){c=h;while(1){if((e[a]|0)===0){a=a-1|0;c=c-1|0;if((0+a|0)>0)continue;}break;}}else{c=h;}p.i4=c;}}if((af(p,o)|0|0)<=-1)return n|0;r=0;k=0;g=0;a=0;while(1){m=a+1|0;a=l[a]|0;k=(a&65535)+k|0;a=(k>>>16)+(a>>>16)|0;j=e[g]|0;k=((j&65535)-(k&65535)|0)+r|0;j=((j>>>16)-(a&65535)|0)+(k>>16)|0;e[g]=j<<16|k&65535;if((0+m|0)>(0+h|0)){g=n+1|0;if((e[c]|0)!==0)return g|0;a=c-1|0;if((0+a|0)>0)while(1){if((e[a]|0)===0){a=a-1|0;c=c-1|0;if((0+a|0)>0)continue;}break;}p.i4=c;return g|0;}k=a>>>16;a=m;g=g+1|0;r=j>>16;continue;}}function ae(k,j){var l=0,m=0,n=null,g=null,a=0,h=0,e=0,c=null;l=k.i4|0;g=k.a5;m=0;h=0;a=0;while(1){e=g[m]|0;h=(bI(e&65535,j)|0)+h|0;e=(h>>>16)+(bI(e>>>16,j)|0)|0;g[m]=(e<<16)+(h&65535)|0;a=a+1|0;h=e>>>16;if((a|0)<(l|0)){m=m+1|0;continue;}break;}if((h|0)!==0){if((l|0)<(k.i2|0)){c=k;}else{a=k.i1|0;c={a0:null,i1:0,i2:0,i3:0,i4:0,a5:nullArray};a=a+1|0;c.i1=a;a=1<<a;c.i2=a;g=new Int32Array((a<<2)/4|0);c.a5=g;c.i4=0;c.i3=0;c.i3=k.i3|0;c.i4=k.i4|0;a=k.i4|0;if((a|0)>0){n=k.a5;e=0;while(1){g[e]=n[e]|0;e=e+1|0;if((e|0)!==(a|0))continue;break;}}}g[l]=h;c.i4=l+1|0;return c;}return k;}function af(j,h){var k=null,l=null,a=0,c=0,e=0,g=0;a=h.i4|0;c=(j.i4|0)-a|0;if((c|0)!==0)return c|0;k=j.a5;l=h.a5;e=a-1|0;g=k[e]|0;a=a-1|0;c=l[a]|0;if((g|0)===(c|0))while(1){if((0+e|0)<=0)return 0|0;e=e-1|0;g=k[e]|0;a=a-1|0;c=l[a]|0;if((g|0)===(c|0))continue;break;}return (g>>>0<c>>>0? -1|0:1|0)|0;}function ak(n,m){var l=0,h=null,j=null,g=null,t=0,u=0,s=0,r=0,p=0,c=0,a=0,e=0,o=0,k=0;c=n.i1|0;a=n.i2|0;e=m>>5;l=(n.i4|0)+e|0;if((l|0)>=(a|0))while(1){a<<=1;c=c+1|0;if((l|0)>=(a|0))continue;break;}h={a0:null,i1:0,i2:0,i3:0,i4:0,a5:nullArray};h.i1=c;c=1<<c;h.i2=c;j=new Int32Array((c<<2)/4|0);h.a5=j;h.i4=0;h.i3=0;if((e|0)>0){a=0;c=0;while(1){j[c]=0;a=a+1|0;if((a|0)!==(e|0)){c=c+1|0;continue;}break;}}else{e=0;}g=n.a5;c=n.i4|0;a=m&31;t=l+1|0;if((a|0)!==0){o=(Math.imul((0+c|0)>(0+1|0)?0+c|0:0+1|0,4))+((Math.imul(0,4))^ -1)|0;u=32-a|0;r=e;k=0;s=0;while(1){j[r]=g[s]<<a|k;p=s+1|0;k=g[s]>>>u;if((0+p|0)<(0+c|0)){s=p;r=r+1|0;continue;}break;}j[(0+e|0)+((o>>>2)+1|0)|0]=k;h.i4=((k|0)!==0?l+2|0:t|0)-1|0;return h;}else{a=0;while(1){o=a+1|0;j[e]=g[a]|0;if((0+o|0)<(0+c|0)){a=o;e=e+1|0;continue;}break;}h.i4=t-1|0;return h;}}function az(j,h){var e=0,g=null,a=null,c=null;e=h&3;if((e|0)!==0){g=ae(j,a5[e-1|0]|0);}else{g=j;}e=h>>2;if((e|0)===0)return g;a=y.a9;a:{if(a!==null){a=a.a2;if(a!==null)break a;}else{a={a0:null,i1:0,a2:null,a3:null};y.a9=a;a.i1=0;a.a2=null;a.a0=null;a.a3=null;}a={a0:null,i1:0,i2:0,i3:0,i4:0,a5:nullArray};a.i1=1;a.i2=2;c=new Int32Array(2);a.a5=c;a.i3=0;c[0]=625;a.i4=1;y.a9.a2=a;a.a0=null;}while(1){if((e&1|0)!==0){g=aD(g,a);}e>>=1;if((e|0)!==0){c=a.a0;if(c===null){c=aD(a,a);a.a0=c;c.a0=null;}a=c;continue;}break;}return g;}function aD(v,x){var l=null,c=null,u=0,w=0,r=0,p=0,s=null,a=null,h=0,g=0,t=0,e=0,k=0,j=0,n=0,m=0,o=0;r=v.i4|0;p=x.i4|0;s=(r|0)<(p|0)?v:x;a=(r|0)<(p|0)?x:v;r=a.i4|0;p=s.i4|0;h=p+r|0;g=(a.i1|0)+((h|0)>(a.i2|0)?1:0)|0;l={a0:null,i1:0,i2:0,i3:0,i4:0,a5:nullArray};l.i1=g;g=1<<g;l.i2=g;c=new Int32Array((g<<2)/4|0);l.a5=c;l.i4=0;l.i3=0;if((h|0)>0){g=0;while(1){c[g]=0;g=g+1|0;if((0+g|0)<(0+h|0))continue;break;}}a=a.a5;s=s.a5;if((p|0)>0){g=((Math.imul((0+r|0)>(0+1|0)?0+r|0:0+1|0,4))+((Math.imul(0,4))^ -1)>>>2)+1|0;t=0;u=0;while(1){e=s[t]|0;k=e&65535;if((k|0)!==0){n=u;j=0;e=0;while(1){m=a[e]|0;o=c[n]|0;j=((o&65535)+j|0)+(bI(m&65535,k)|0)|0;e=e+1|0;o=((bI(m>>>16,k)|0)+(o>>>16)|0)+(j>>>16)|0;c[n]=o<<16|j&65535;j=o>>>16;if((0+e|0)<(0+r|0)){n=n+1|0;continue;}break;}c[g]=j;e=s[t]|0;}e>>>=16;if((e|0)!==0){k=c[u]|0;m=k;n=u;j=0;o=0;while(1){j=(j+(k>>>16)|0)+(bI(a[o]&65535,e)|0)|0;w=n+1|0;c[n]=j<<16|m&65535;n=o+1|0;k=c[w]|0;m=((k&65535)+(j>>>16)|0)+(bI(a[o]>>>16,e)|0)|0;if((0+n|0)<(0+r|0)){o=n;j=m>>>16;n=w;continue;}break;}c[g]=m;}t=t+1|0;if((0+t|0)<(0+p|0)){u=u+1|0;g=g+1|0;continue;}break;}}if((h|0)<=0){l.i4=h;return l;}r=h;while(1){h=h-1|0;if((c[h]|0)!==0){l.i4=r;return l;}p=r-1|0;if((r|0)>1){r=p;continue;}break;}l.i4=p;return l;}function aA(e){var c=0,a=0;c=e>>>0>65535?0|0:16|0;a=e>>>0>65535?e|0:e<<16|0;if(a>>>0<=16777215){c=c+8|0;a<<=8;}if(a>>>0<=268435455){c=c+4|0;a<<=4;}if(a>>>0<=1073741823){c=c+2|0;a<<=2;}if((a|0)>=0){if((a&1073741824|0)===0)return 32|0;c=c+1|0;}return c|0;}function ax(e,f){var a=0,c=0;a=e[f]|0;if((a&7|0)!==0){if((a&1|0)!==0)return 0|0;if((a&2|0)!==0){e[f]=a>>>1;return 1|0;}e[f]=a>>>2;return 2|0;}c=(a&65535|0)!==0?a|0:a>>>16|0;a=(a&65535|0)!==0?0|0:16|0;if((c&255|0)===0){a=a+8|0;c>>>=8;}if((c&15|0)===0){a=a+4|0;c>>>=4;}if((c&3|0)===0){a=a+2|0;c>>>=2;}if((c&1|0)===0){c>>>=1;if((c|0)===0)return 32|0;a=a+1|0;}e[f]=c;return a|0;}function z(g,e,c,d,a){var o=null,m=0,j=0,h=null,i=0,l=0,k=0,n=null;j=e.i2|0;if(j>>>0<=a>>>0){l=e.i3<<16>>16;if((l&1152|0)!==0){i=e.a0o;h=e.a0;o=e.a4;n=o.a0;m=(i)-(0)|0;k=(a+1|0)+m|0;j=(bI(o.i1|0,3)|0)/2|0;k=j>>>0<k>>>0?k|0:j|0;a:{if((l&1024|0)!==0){h=new Uint8Array(k/1|0);if(h!==nullArray||0!==0){if((m|0)!==0){n=o.a0;l=0;j=0;while(1){h[l]=n[j]|0;l=l+1|0;if(h!==h||(0+m|0)!==(0+l|0)){j=j+1|0;continue;}break;}}e.i3=e.i3& -1153|128;break a;}g.i0=12;}else{if(n!==nullArray||0!==0){h=(function(){var __old__=n;var __ret__=new Uint8Array(k/1|0);__ret__.set(__old__.subarray(0, Math.min(__ret__.length,__old__.length)));return __ret__;})();}else{h=new Uint8Array(k/1|0);}if(h!==nullArray||0!==0)break a;g.i0=12;}e.i3=e.i3|64;return  -1|0;}o.a0=h;e.a0=h;e.a0o=0+m|0;o.i1=k;e.i2=k-m|0;j=a;}}j=j>>>0>a>>>0?a|0:j|0;i=e.a0o;h=e.a0;if((j|0)!==0)if(i>d){l=j;k=j;while(1){k=k-1|0;l=l-1|0;h[i+k|0]=c[d+l|0]|0;if(h!==h||i!==(i+k|0))continue;break;}}else{k=0;l=0;while(1){h[i+k|0]=c[d+l|0]|0;k=k+1|0;if(h!==h||(i+j|0)!==(i+k|0)){l=l+1|0;continue;}break;}}e.i2=(e.i2|0)-j|0;i=e.a0o;h=e.a0;e.a0=h;e.a0o=i+j|0;return 0|0;}var bq=new Uint8Array([105,110,112,117,116,84,101,120,116,0]);var bp=new Uint8Array([114,101,115,117,108,116,0]);var bk=new Uint8Array([105,110,112,117,116,0]);var bh=new Uint8Array([13,10,124,13,124,10,0]);var aN=new Uint8Array([76,105,110,101,115,32,111,102,32,110,117,109,98,101,114,32,105,115,32,58,32,0]);var bn=new bG();var bm=new bG();var bl=new bG();var bj=new Uint8Array([67,0]);var bi=new bz();var y={i0:0,a1:bn,a2:bm,a3:bl,i4:0,a5:null,i6:0,i7:0,a8:bj[0],a9:null,a10:null,i11:0,i12:0,a13:null,a14:null,a15:null,a16:null,a17:null,a18:null,a19:{a0:null,i1:0,a2:b1([],0,32,null),a3:null},a20:{a0:null,i1:0,a2:null},a21:null,a22:bi,a23:null};var bo=new Uint8Array([37,100,0]);var aa=new Uint8Array([35,45,48,43,32,0]);var am=new Uint8Array([104,108,76,0]);var a_=new Uint8Array([105,110,102,0]);var a8=new Uint8Array([73,78,70,0]);var a7=new Uint8Array([110,97,110,0]);var a6=new Uint8Array([78,65,78,0]);var bb=new Uint8Array([73,110,102,105,110,105,116,121,0]);var ba=new Uint8Array([78,97,78,0]);var $=new Float64Array([1,10,100,1000,1.0E+4,1.0E+5,1.0E+6,1.0E+7,1.0E+8,1.0E+9,1.0E+10,1.0E+11,1.0E+12,1.0E+13,1.0E+14,1.0E+15,1.0E+16,1.0E+17,1.0E+18,1.0E+19,1.0E+20,1.0E+21,1.0E+22,9.9999999999999991E+22,9.9999999999999998E+23]);var aJ=new Float64Array([1.0E+16,1.0E+32,1.0E+64,1.0E+128,1.0E+256]);var aK=new Uint8Array([48,0]);var a4=new Uint8Array([46,0]);var a9=new Uint8Array([48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,0]);var a$=new Uint8Array([48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,0]);var a5=new Int32Array([5,25,125]);function bD(){this.i0=0;this.a1=null;this.a2=null;this.a3=null;this.i4=0;this.a5=null;this.i6=0;this.i7=0;this.a8=null;this.a9=null;this.a10=null;this.i11=0;this.i12=0;this.a13=null;this.a14=null;this.a15=null;this.a16=null;this.a17=null;this.a18=null;this.a19={a0:null,i1:0,a2:b1([],0,32,null),a3:null};this.a20={a0:null,i1:0,a2:null};this.a21=null;this.a22=null;this.a23=null;}function bz(){this.a0=null;this.a1={i0:0,i1:0};this.a2={i0:0,i1:0};this.a3={i0:0,i1:0};this.a4=new Uint8Array(8);this.i5=0;this.a6={i0:0,i1:0};this.a7={i0:0,i1:0};this.a8={i0:0,i1:0};this.a9={i0:0,i1:0};this.a10={i0:0,i1:0};}function bw(){this.i0=0;this.i1=0;this.i2=0;this.i3=0;this.i4=0;this.i5=0;this.i6=0;this.a7=[0];this.a8=[0];this.a9=new Uint8Array(50);this.d10=-0.;this.i11=0;}function bG(){this.a0=nullArray;this.a0o=0;this.i1=0;this.i2=0;this.i3=0;this.a4={a0:nullArray,i1:0};this.i5=0;this.a6=null;this.a7=null;this.a8=null;this.a9=null;this.a10=null;this.a11=null;this.a12={a0:nullArray,i1:0};this.a13=null;this.i14=0;this.a15=new Uint8Array(4);this.a16={a0:nullArray,i1:0};this.i17=0;this.i18=0;this.i19=0;this.a20={i0:0,i1:0};this.i21=0;}function b1(r,s,e,v){for(var i=s;i<e;i++)r[i]=v;return r;}function bZ(func, obj){return function(){var a=Array.prototype.slice.call(arguments);a.unshift(obj);return func.apply(null,a);};}function b0(func, obj, objo){return function(){var a=Array.prototype.slice.call(arguments);a.unshift(obj,objo);return func.apply(null,a);};}function b8(ptr){var ret=ptr.d[ptr.o];ptr.o++;return ret;}Promise.resolve();bc();