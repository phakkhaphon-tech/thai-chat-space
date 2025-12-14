import { Users, Crown, Shield, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface User {
  id: string;
  nickname: string;
  isVip?: boolean;
  isModerator?: boolean;
}

interface OnlineUsersListProps {
  users: User[];
  onClose?: () => void;
  isMobile?: boolean;
}

const OnlineUsersList = ({ users, onClose, isMobile }: OnlineUsersListProps) => {
  const moderators = users.filter(u => u.isModerator);
  const vips = users.filter(u => u.isVip && !u.isModerator);
  const regular = users.filter(u => !u.isVip && !u.isModerator);

  const UserItem = ({ user }: { user: User }) => (
    <div className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-muted transition-colors cursor-pointer">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
        user.isModerator ? "bg-gradient-primary" :
        user.isVip ? "bg-gradient-to-br from-vip to-yellow-400" :
        "bg-muted"
      }`}>
        <span className={`text-xs font-semibold ${
          user.isModerator || user.isVip ? "text-foreground" : "text-muted-foreground"
        }`}>
          {user.nickname.charAt(0).toUpperCase()}
        </span>
      </div>
      <span className="text-sm text-foreground truncate flex-1">{user.nickname}</span>
      {user.isModerator && <Shield className="w-4 h-4 text-primary flex-shrink-0" />}
      {user.isVip && !user.isModerator && <Crown className="w-4 h-4 text-vip flex-shrink-0" />}
    </div>
  );

  return (
    <div className={`bg-card border-l border-border h-full flex flex-col ${
      isMobile ? "w-full" : "w-64"
    }`}>
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-primary" />
          <span className="font-semibold text-foreground">ออนไลน์</span>
          <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
            {users.length}
          </span>
        </div>
        {isMobile && onClose && (
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        )}
      </div>

      <ScrollArea className="flex-1">
        <div className="p-2">
          {/* Moderators */}
          {moderators.length > 0 && (
            <div className="mb-4">
              <p className="px-3 py-1 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                ผู้ดูแล — {moderators.length}
              </p>
              {moderators.map(user => (
                <UserItem key={user.id} user={user} />
              ))}
            </div>
          )}

          {/* VIPs */}
          {vips.length > 0 && (
            <div className="mb-4">
              <p className="px-3 py-1 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                VIP — {vips.length}
              </p>
              {vips.map(user => (
                <UserItem key={user.id} user={user} />
              ))}
            </div>
          )}

          {/* Regular users */}
          {regular.length > 0 && (
            <div>
              <p className="px-3 py-1 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                สมาชิก — {regular.length}
              </p>
              {regular.map(user => (
                <UserItem key={user.id} user={user} />
              ))}
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default OnlineUsersList;
